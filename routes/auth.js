const express= require('express');
const router = express.Router();
const controller = require('../controllers/auth')
router.get('/login', controller.loginForm)
module.exports = router;