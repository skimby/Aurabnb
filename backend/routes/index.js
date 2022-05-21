// backend/routes/index.js
const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
// const usersRouter = require('./users.js');

// router.get('/hello/world', function (req, res) {
////attaching a cookie to the response
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.send('Hello World!');
// });


router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});

//connecting all API folder routers
router.use('/', apiRouter);



module.exports = router;
