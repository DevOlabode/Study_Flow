const User = require('../models/user');
const path = require('path')

module.exports.loginForm = (req, res)=>{
    res.sendFile(path.join(__dirname, "../views", "auth/login.html"));
};

module.exports.login = async(req, res)=>{
    // const { logemail, logpass } = req.body;
    console.log(req.body)
}