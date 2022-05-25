const express = require('express');

//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');

const { Spot, Image, User, Review } = require('../../db/models');
const router = express.Router();

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage("Review text is required"),
    check('stars')
        .exists({ checkFalsy: true })
        .withMessage("Stars must be an integer from 1 to 5"),
    handleValidationErrors
];

// GET REVIEW BY ID
router.get('/:reviewId', async (req, res) => {
    const { reviewId } = req.params;
    const review = await Review.findByPk(reviewId);
    res.status(200);
    res.json(review);

})

// EDIT REVIEW
router.put('/:reviewId', requireAuth, validateReview, async (req, res) => {
    const { reviewId } = req.params;
    const { review, stars } = req.body;
    const editReview = await Review.findByPk(reviewId);

    if (editReview) {
        if (editReview.userId === req.user.id) {
            editReview.review = review;
            editReview.start = stars;
            await editReview.save();
            res.status(200);
            res.json(editReview);
        }

    } else {
        res.status(404);
        res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
        })
    }

});

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
