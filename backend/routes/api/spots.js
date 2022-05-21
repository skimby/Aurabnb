const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const sessionRouter = require('./session.js');


const { Spot } = require('../../db/models');
const router = express.Router();


router.use('/session', sessionRouter);

router.get('/', async (req, res) => {
    const Spots = await Spot.findAll();
    res.status(200);
    return res.json({ Spots });
})

module.exports = router;
