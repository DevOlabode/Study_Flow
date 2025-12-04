const express= require('express');
const router = express.Router();
const controller = require('../controllers/auth');

const catchAsync = require('../utils/catchAsync');

const {storeReturnTo, loginAuthenticate, redirectIfLoggedIn} = require('../middleware')

router.get('/login', redirectIfLoggedIn, controller.loginForm);

router.post('/login', storeReturnTo, loginAuthenticate, controller.login);

router.get('/signup', redirectIfLoggedIn, controller.signupForm);

router.post('/signup', catchAsync(controller.signup))

module.exports = router;