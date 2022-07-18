const express = require('express');

//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Op } = require("sequelize");

const { Booking, Spot, Image } = require('../../db/models');
const router = express.Router();




// GET ALL OF THE CURRENT USERS BOOKING
router.get('/me', requireAuth, async (req, res) => {
    const Bookings = await Booking.findAll({
        where: {
            userId: req.user.id
        },
        include: {
            model: Spot,
            attributes: { exclude: ['description', 'createdAt', 'updatedAt'] },
            include: {
                model: Image,
                attributes: ['url']
            },
        }
    })


    Bookings.forEach(booking => {
        booking.dataValues.Spot.dataValues.previewImage = booking.dataValues.Spot.dataValues.Images;
        delete booking.dataValues.Spot.dataValues.Images;

    })

    res.status(200);
    return res.json({ Bookings });
});

// GET A BOOKING BY ID
router.get('/:bookingId', async (req, res) => {
    const { bookingId } = req.params;
    const Bookings = await Booking.findOne({
        where: {
            id: bookingId
        }
    });
    res.status(200);
    res.json({ Bookings })
})

// EDIT A BOOKING
router.put('/:bookingId', requireAuth, async (req, res, next) => {
    const { bookingId } = req.params;
    const booking = await Booking.findByPk(bookingId);

    let { startDate, endDate } = req.body;
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    const curDate = new Date();

    let isClearBooking;


    if (booking) {

        const allBookingsForSpot = await Booking.findAll({
            where: {
                [Op.and]: [
                    { spotId: booking.spotId },
                    {
                        id:
                        {
                            [Op.not]: bookingId
                        }
                    }
                ]

            }
        });
        // console.log(allBookingsForSpot)

        allBookingsForSpot.forEach(booking => {
            if (((startDate <= booking.dataValues.startDate) && (endDate >= booking.dataValues.startDate)) || ((startDate >= booking.dataValues.startDate) && (booking.dataValues.endDate >= startDate))) {
                isClearBooking = true;
            }
        })
        // console.log(`isClearBooking: ${isClearBooking}`)

        if (req.user.id === booking.userId) {

            if (!isClearBooking) {

                // console.log(curDate, booking.endDate)
                if (curDate >= booking.endDate) {
                    res.status(400);
                    const err = new Error("Past bookings can't be modified");
                    err.message = "Past bookings can't be modified";
                    err.status = 400;
                    return next(err);

                } else {
                    booking.startDate = startDate;
                    booking.endDate = endDate;
                    await booking.save();

                    res.status(200);
                    return res.json(booking);

                }
            } else {
                res.status(403);
                const err = new Error("Sorry, this spot is already booked for the specified dates");
                err.message = "Sorry, this spot is already booked for the specified dates";
                err.status = 403;
                err.errors = {
                    startDate: "Start date conflicts with an existing booking",
                    endDate: "End date conflicts with an existing booking"
                }
                return next(err);
            }

        } else {
            const err = new Error('Forbidden');
            err.message = 'Forbidden';
            err.status = 403;
            return next(err);
        }

    } else {
        res.status(404)
        const err = new Error("Booking couldn't be found");
        err.message = "Booking couldn't be found";
        err.status = 404;
        return next(err);
    }

});

// DELETE A BOOKING
router.delete('/:bookingId', requireAuth, async (req, res, next) => {
    const { bookingId } = req.params;
    const booking = await Booking.findOne({
        where: {
            id: bookingId
        }
    });
    const date = new Date();


    if (booking) {
        if (date >= booking.startDate) {
            res.status(400);
            const err = new Error("Bookings that have been started can't be deleted");
            err.message = "Bookings that have been started can't be deleted";
            err.status = 400;
            return next(err);

        } else {
            if (req.user.id === booking.userId) {
                booking.destroy();
                res.status(200);
                res.json({
                    "message": "Successfully deleted",
                    "statusCode": 200
                })
            } else {
                const err = new Error('Forbidden');
                err.message = 'Forbidden';
                err.status = 403;
                return next(err);
            }
        }
    } else {
        res.status(404);
        const err = new Error("Booking couldn't be found");
        err.message = "Booking couldn't be found";
        err.status = 404;
        return next(err);
    }
})


module.exports = router;
