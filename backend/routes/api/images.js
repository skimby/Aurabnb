const express = require('express');

//validator
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const { Op } = require("sequelize");

const { Spot, Image, Review } = require('../../db/models');
const router = express.Router();


router.delete('/:imageId', requireAuth, async (req, res) => {
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
        if (req.user.id === spot.ownerId && (spot.id === image.spotId) && (image.imageableType === 'Spot')) {
            image.destroy();
            res.status(200);
            res.json({
                "message": "Successfully deleted",
                "statusCode": 200
            })
        }

        if (req.user.id === review.userId && (review.id === image.reviewId) && (image.imageableType === 'Review')) {
            image.destroy();
            res.status(200);
            res.json({
                "message": "Successfully deleted",
                "statusCode": 200
            })
        }

    } else {
        res.status(404);
        res.json({
            "message": "Image couldn't be found",
            "statusCode": 404
        })
    }

})



module.exports = router;
