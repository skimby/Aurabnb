const express = require('express');

//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Op } = require("sequelize");

const { Spot, Image, Review } = require('../../db/models');
const router = express.Router();


router.delete('/:imageId', requireAuth, async (req, res, next) => {
    const { imageId } = req.params;
    const image = await Image.findByPk(imageId)
    const spot = await Spot.findOne({
        where: {
            ownerId: req.user.id
        }
    })
    const review = await Review.findOne({
        where: {
            userId: req.user.id
        }
    })

    if (image) {
        // if (req.user.id === spot.ownerId) {
        if ((spot.id === image.spotId) && (image.imageableType === 'Spot')) {
            image.destroy();
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
        const err = new Error("Image couldn't be found");
        err.message = "Image couldn't be found";
        err.status = 404;
        return next(err);
    }

    if (review) {
        // if (req.user.id === review.userId) {
        if ((review.id === image.reviewId) && (image.imageableType === 'Review')) {
            image.destroy();
            res.status(200);
            res.json({
                "message": "Successfully deleted",
                "statusCode": 200
            })


        } else {
            res.status(403)
            const err = new Error('Forbidden');
            err.message = 'Forbidden';
            err.status = 403;
            return next(err);
        }

    } else {
        res.status(404);
        const err = new Error("Image couldn't be found");
        err.message = "Image couldn't be found";
        err.status = 404;
        return next(err);
    }
})



module.exports = router;
