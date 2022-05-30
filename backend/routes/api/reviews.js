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

// ADD IMAGE TO REVIEW BASED ON REVIEWID
router.post('/:reviewId/images', requireAuth, async (req, res) => {
    const { url } = req.body;
    const { reviewId } = req.params;
    const review = await Review.findByPk(reviewId);
    const imageCount = await Image.count();
    const allReviewImagesCount = await Image.count({
        where: {
            reviewId
        },
        attributes: {
            url
        }
    })

    if (review) {
        if (req.user.id === review.userId) {
            if (allReviewImagesCount >= 10) {
                res.status(400);
                res.json({
                    "message": "Maximum number of images for this resource was reached",
                    "statusCode": 400
                })
            } else {
                const image = await Image.create({
                    id: imageCount + 1,
                    imageableType: 'Review',
                    url,
                    spotId: null,
                    reviewId
                });

                image.dataValues.imageableId = reviewId;
                delete image.dataValues.spotId;
                delete image.dataValues.reviewId;
                delete image.dataValues.createdAt;
                delete image.dataValues.updatedAt;

                res.status(200);
                res.json(image);
            }
        } else {
            const err = new Error('Forbidden');
            err.message = 'Forbidden';
            err.status = 403;
            return next(err);
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
router.get('/me', restoreUser, async (req, res) => {
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
});


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
    const reviewCount = await Review.count();

    if (editReview && (reviewId <= reviewCount)) {
        if (editReview.userId === req.user.id) {
            editReview.review = review;
            editReview.start = stars;
            await editReview.save();
            res.status(200);
            res.json(editReview);
        } else {
            const err = new Error('Forbidden');
            err.message = 'Forbidden';
            err.status = 403;
            return next(err);
        }

    } else {
        res.status(404);
        res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
        });
    }
});

// DELETE REVIEW
router.delete('/:reviewId', requireAuth, async (req, res) => {
    const { reviewId } = req.params;
    const reviewCount = await Review.count();
    const review = await Review.findByPk(reviewId);

    if (review && (reviewId <= reviewCount)) {
        if (review.userId === req.user.id) {
            await review.destroy();
            res.status(200);
            res.json({
                "message": "Successfully deleted",
                "statusCode": 200
            })
        } else {
            const err = new Error('Forbidden');
            err.message = 'Forbidden';
            err.status = 403;
            return next(err);
        }

    } else {
        res.status(404);
        res.json({
            "message": "Review couldn't be found",
            "statusCode": 404
        });
    }

})



module.exports = router;
