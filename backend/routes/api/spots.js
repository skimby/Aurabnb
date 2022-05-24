const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const sessionRouter = require('./session.js');


const { Spot, Image } = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();
const { Op } = require("sequelize");

router.use('/session', sessionRouter);

router.get('/', async (req, res) => {
    // const model = await Spot.findOne({
    //     include: {
    //         model: Image
    //     }
    // })

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
