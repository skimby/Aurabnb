const express = require('express');

//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

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




module.exports = router;
