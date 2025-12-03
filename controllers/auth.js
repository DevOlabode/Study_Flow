const User = require('../models/user');
const path = require('path')

module.exports.loginForm = (req, res)=>{
    res.render('auth/login')
};

module.exports.login = (req, res)=>{
    req.flash('success', 'Welcome Back to Study Flow');
    const redirectUrl = res.locals.returnTo || '/'
    res.redirect(redirectUrl);
};