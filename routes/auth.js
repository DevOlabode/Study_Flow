const express= require('express');
const router = express.Router();
const controller = require('../controllers/auth');

const catchAsync = require('../utils/catchAsync');

const {storeReturnTo, loginAuthenticate} = require('../middleware')

router.get('/login', controller.loginForm);

router.post('/login', storeReturnTo, loginAuthenticate, controller.login);

module.exports = router;