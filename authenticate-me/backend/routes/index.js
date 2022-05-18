const express = require('express');
const app = require('../app');
const router = express.Router();

//import API folder router, all urls of the router in api router with be prefixed with '/api'
const apiRouter = require('./api');
router.use('/api', apiRouter);

//setting a cookie on response with name of XSRF... to val of the req.csrfToken
// router.get('/hello/world', function (req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.send('Hello World!');
// });

//SETTING A COOKIE ON RES WITH THE NAME OF XSRF-TOKEN TO VAL OF REQ.CSRFTOKEN
router.get('/api/csrf/restore', (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie('XSRF-TOKEN', csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    })
})

module.exports = router;
