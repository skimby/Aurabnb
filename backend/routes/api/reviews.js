const express = require('express');

//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');

const { Spot, Image, User, Review } = require('../../db/models');
const router = express.Router();


// GET REVIEWS OF CURRENT USER
router.get('/', restoreUser, async (req, res) => {

    const Reviews = await Review.findAll({
        where: {
            userId: req.user.id
        },
        include: [
            { model: Spot },
            {
                model: Image,
                attributes: ['url']
            }]
    });
    res.status(200);
    res.json({ Reviews });
})

module.exports = router;
