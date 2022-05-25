const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const reviewRouter = require('./reviews.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/reviews', reviewRouter);

// router.post('/test', function (req, res) {
//     res.json({ requestBody: req.body });
// });




module.exports = router;
