const User = require('../models/user');

module.exports.loginForm = (req, res)=>{
    res.render('auth/login')
};

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back to CoinCoach!');
    const returnUrl = res.locals.returnTo || '/';
    res.redirect(returnUrl);
};

module.exports.signupForm = (req, res) =>{
    res.render('auth/login')
};

module.exports.signup = async(req, res, next) =>{
    const {name, email, password, username} = req.body;

    const user = new User({username, email, name});
    const registeredUser = await User.register(user, password);

    req.login(registeredUser, err => {
        if(err) return next(err)
        req.flash('success', 'Welcome The StudyFlow');
        res.redirect('/')
    })
};

module.exports.logout = async(req, res)=>{
    req.logout(err=>{
        if(err) return next(err);
        req.flash('success', "Successfully Signed Out");
        res.redirect('/')
    })
};