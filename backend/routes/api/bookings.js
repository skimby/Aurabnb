const express = require('express');

//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Op } = require("sequelize");

const { Booking, Spot, Image } = require('../../db/models');
const router = express.Router();




// GET CURRENT USER BOOKINGS
router.get('/me', requireAuth, async (req, res) => {
    const Bookings = await Booking.findAll({
        where: {
            userId: req.user.id
        },
        include: {
            model: Spot,
            include: {
                model: Image, as: 'previewImage',
                attributes: ['url']
            },
        }
    })
    res.status(200);
    res.json({ Bookings });
});


// EDIT A BOOKING
router.put('/:bookingId', requireAuth, async (req, res) => {
    const { bookingId } = req.params;
    const booking = await Booking.findOne({
        where: {
            id: bookingId
        }
    });
    const { startDate, endDate } = req.body;
    const bookingCount = await Booking.count();
    const date = new Date();
    const isBookedBooking = await Booking.findAll({
        where: {
            [Op.or]: [{
                startDate: {
                    [Op.between]: [startDate, endDate]
                }
            },
            {
                endDate: {
                    [Op.between]: [startDate, endDate]
                }
            }
            ]
        }
    })

    if (booking && (booking.id <= bookingCount)) {
        console.log('1 hit')

        if (booking.endDate >= date) {
            console.log('2 hit')
            res.status(400);
            res.json({
                "message": "Past bookings can't be modified",
                "statusCode": 400
            })
        } else {
            if (isBookedBooking) {
                res.status(403);
                res.json({
                    "message": "Sorry, this spot is already booked for the specified dates",
                    "statusCode": 403,
                    "errors": {
                        "startDate": "Start date conflicts with an existing booking",
                        "endDate": "End date conflicts with an existing booking"
                    }
                })
            } else {
                if (req.user.id === booking.userId) {
                    booking.startDate = startDate;
                    booking.endDate = endDate;
                    await booking.save();


                    res.status(200);
                    res.json(booking);
                }

            }

        }
    } else {
        console.log('3 hit')
        res.status(404);
        res.json({
            "message": "Booking couldn't be found",
            "statusCode": 404
        })
    }
})


module.exports = router;
