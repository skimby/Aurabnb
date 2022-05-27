const express = require('express');


//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

const { Spot, Image, Review, Booking, User } = require('../../db/models');
const router = express.Router();



// SPOT VALIDATION ERROR
//checks the body of new spot post request
const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        // .notEmpty()
        .withMessage("Street address is required"),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage("City is required"),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage("State is required"),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage("Country is required"),
    check('lat')
        .exists({ checkFalsy: true })
        .withMessage("Latitude is not valid"),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage("Longitude is not valid"),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage("Name must be less than 50 characters"),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage("Description is required"),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage("Price per day is required"),
    handleValidationErrors
];

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage("Review text is required"),
    check('stars')
        .exists({ checkFalsy: true })
        .withMessage("Stars must be an integer from 1 to 5"),
    handleValidationErrors
];


//ROUTES
// GET ALL REVIEWS BY SPOT ID
router.get('/:spotId/reviews', async (req, res) => {
    const { spotId } = req.params;
    const reviewCount = await Review.count();

    const reviews = await Review.findAll({
        where: {
            spotId
        },
        include: {
            model: Image,
            attributes: ['url']
        }
    });

    if (reviews >= reviewCount) {
        res.status(200);
        res.json(reviews);
    } else {
        res.status(404);
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        });
    }
});

// CREATE NEW REVIEW FOR SPOT BY SPOTID
router.post('/:spotId/reviews', requireAuth, validateReview, async (req, res) => {
    const { spotId } = req.params;
    const { review, stars } = req.body;
    const reviewCount = await Review.count();
    const spotCount = await Spot.count();

    const spotReviews = await Review.findOne({
        where: {
            spotId
        }
    });

    if (spotReviews.userId !== req.user.id) {
        const newReview = await Review.create({
            id: reviewCount + 1,
            userId: req.user.id,
            spotId,
            review,
            stars
        });
    } else {
        res.status(403);
        res.json({
            "message": "User already has a review for this spot",
            "statusCode": 403
        })
    }

    const resReview = await Review.findByPk(reviewCount + 1);

    if (spotId <= spotCount) {
        res.status(200);
        res.json(resReview);
    } else {
        res.status(404);
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        });
    }
});

// GET ALL BOOKINGS FROM SPOT BASED ON SPOT ID
router.get('/:spotId/bookings', requireAuth, async (req, res) => {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);
    const spotCount = await Spot.count();

    if (spot && (spot <= spotCount)) {
        if (req.user.id !== spot.ownerId) {
            res.status(200);
            const Bookings = await Booking.findOne({
                where: {
                    spotId: spot.id
                },
                attributes:
                    ['spotId', 'startDate', 'endDate']
            });
            res.json({ Bookings })
        } else {
            res.status(200);
            const Bookings = await Booking.findOne({
                include: [{
                    model: User,
                    attributes: ['id', 'firstName', 'lastName']
                }],
                where: {
                    spotId: spot.id
                }
            });
            res.json({ Bookings })
        }
    } else {
        res.status(404);
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
})

// CREATE A BOOKING FROM A SPOT BASED ON THE SPOT'S ID

// GET ALL SPOTS OF CURRENT USER
router.get('/me', restoreUser, async (req, res) => {
    const Spots = await Spot.findAll({
        include: [{
            model: Image, as: 'previewImage',
            attributes: ['url']
        }],
        where: {
            ownerId: req.user.id
        }
    });

    res.status(200);
    res.json({ Spots })
});

// GET SPOT BY ID
router.get('/:spotId', async (req, res) => {
    const { spotId } = req.params;

    const spots = await Spot.findByPk(spotId);

    if (spots) {
        res.status(200);
        res.json(spots);
    } else {
        res.status(404);
        res.json({
            message: "Spot couldn't be found",
            statusCode: 404
        })
    }
});

// EDIT A SPOT BY ID
router.put('/:spotId', restoreUser, validateSpot, async (req, res) => {
    const { spotId } = req.params;
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spot = await Spot.findByPk(spotId);

    if (spot) {
        if (req.user.id === spot.ownerId) {
            spot.address = address;
            spot.city = city;
            spot.state = state;
            spot.country = country;
            spot.lat = lat;
            spot.lng = lng;
            spot.name = name;
            spot.description = description;
            spot.price = price;

            await spot.save();
            res.status(200);
            res.json(spot);
        }
    } else {
        res.status(404);
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        })
    }
});

// DELETE SPOT BY ID
router.delete('/:spotId', restoreUser, async (req, res) => {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);

    if (spot) {
        if (spot.ownerId === req.user.id) {
            await spot.destroy();

            res.status(200);
            res.json({
                "message": "Successfully deleted",
                "statusCode": 200
            });
        }
    } else {
        res.status(404);
        res.json({
            "message": "Spot couldn't be found",
            "statusCode": 404
        });
    }

})

router.get('/', async (req, res) => {
    const Spots = await Spot.findAll({
        include: [{
            model: Image, as: 'previewImage',
            attributes: ['url']

        }]
    });
    res.status(200);
    return res.json({ Spots });
})
// CREATE A NEW SPOT
router.post('/', restoreUser, validateSpot, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spotCount = await Spot.count();
    console.log(spotCount)
    const spot = await Spot.create({
        id: (spotCount + 1),
        ownerId: req.user.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    });
    const newSpot = await Spot.findOne({
        where: {
            id: spotCount + 1
        }
    })
    res.status(201);
    res.json(newSpot);
})



module.exports = router;
