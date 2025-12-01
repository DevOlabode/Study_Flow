const User = require('../models/user');
const path = require('path')

module.exports.loginForm = (req, res)=>{
    res.sendFile(path.join(__dirname, "views", "test2.html"));
};