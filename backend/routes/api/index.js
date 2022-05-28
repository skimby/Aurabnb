const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const reviewsRouter = require('./reviews.js')
const bookingsRouter = require('./bookings.js')
const imagesRouter = require('./images.js')


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/reviews', reviewsRouter);
router.use('/bookings', bookingsRouter);
router.use('/images', imagesRouter);


// router.get('/spots?key1=value1?key2=value2?', async (req, res) => {
//     const { page, size } = req.query;


// })



module.exports = router;
