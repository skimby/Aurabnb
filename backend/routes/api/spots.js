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
})

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



module.exports = router;
