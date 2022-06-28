const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

//express validator imports
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


// GET /api/set-token-cookie
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
        // attributes: { exclude: ['isHost', 'createdAt', 'updatedAt'] },
        where: {
            email: 'amytan@gmail.com'
        },

    });
    setTokenCookie(res, user);
    return res.json({ user });
});


// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');
router.get('/restore-user', restoreUser, (req, res) => {
    return res.json(req.user);
}
);

// GET CURRENT USER
// GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
router.get('/me', requireAuth, (req, res) => {
    // *** where is user coming from??? utils>auth.js
    const { id, firstName, lastName, email } = req.user;

    res.status(200);
    return res.json({
        id,
        firstName,
        lastName,
        email
    });
}
);

// LOGS IN USER
//checks the body of request's credentials and password
const validateLogin = [
    check('email')
        .exists({ checkFalsy: true })
        // .notEmpty()
        .withMessage("Email is required"),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage("Password is required"),
    handleValidationErrors
];

// LOG IN USER
router.post('/login', validateLogin,
    async (req, res, next) => {
        const { email, password } = req.body;
        const user = await User.login({ email, password });

        if (!user) {
            const err = new Error("Invalid credentials");
            err.message = "Invalid credentials";
            err.status = 401;
            err.errors = ['The provided credentials were invalid.'];

            return next(err);

        }

        //setting token cookie with the data you get logging in
        await setTokenCookie(res, user);
        // setSessionUser(user);

        res.status(200)
        return res.json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            //req.cookie.token looking for the token, user data,
            //authorizes user
            token: req.cookies.token
        });
    }
);


//express validator //this only tests the inputs
const validateSignup = [
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage("First Name is required"),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage("Last Name is required"),
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
];

// SIGN UP
router.post('/signup', validateSignup, async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    const ifDuplicateEmail = await User.findOne(
        {
            where: { email: email }
        }
    );
    // find user by email,
    //and if you find a user, if exists then create new error
    //otherwise ...
    if (ifDuplicateEmail) {
        const err = new Error('User already exists');
        // err.message = 'User already exists';
        err.status = 403;
        err.errors = { email: "User with that email already exists" };
        next(err);
    } else {
        const user = await User.signup({ firstName, lastName, email, password });

        await setTokenCookie(res, user);

        res.status(200);
        return res.json({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: req.cookies.token
        });
    }
}
);

router.get('/demoUser', (req, res) => {
    const user = User.login({ email: 'amytan@gmail.com', password: 'password1' });

    setTokenCookie(res, user);
    res.status(200);
    console.log(user)
    return res.json(user);
})

// // ERROR MIDDLEWARE
// router.use((err, _req, res, _next) => {
//     res.json({
//         message: err.message,
//         statusCode: err.status,
//         errors: err.errors,
//     });
// });



module.exports = router;
