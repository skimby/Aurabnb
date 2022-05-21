const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');

const sessionRouter = require('./session.js');


const { Spot, Image } = require('../../db/models');
const spot = require('../../db/models/spot');
const router = express.Router();


router.use('/session', sessionRouter);

router.get('/', async (req, res) => {
    const model = await Spot.findOne({
        include: {
            model: Image
        }
    })
    const Spots = await Spot.findAll({
        include: {
            model: Image
        }
    });
    res.status(200);
    // return res.json({
    //     Spots: {
    //         id: spot.id,
    //         ownerId: spot.ownerId,
    //         address: spot.address,
    //         city: spot.city,
    //         state: spot.state,
    //         country: spot.country,
    //         lat: spot.lat,
    //         lng: spot.lng,
    //         name: spot.name,
    //         description: spot.description,
    //         price: spot.price,
    //         createdAt: spot.createdAt,
    //         updatedAt: spot.updatedAt,
    //         url: model.Images[0].url
    //     }
    // });

    return res.json({ Spots });
})

module.exports = router;
