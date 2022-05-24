const express = require('express');


//needed for validations
const sessionRouter = require('./session.js');
//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');

const { Spot, Image } = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();
const { Op } = require("sequelize");

router.use('/session', sessionRouter);

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



//ROUTES
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
