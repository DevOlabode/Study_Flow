const passport = require('passport');

module.exports.loginAuthenticate = passport.authenticate('local', {
    failureFlash : true,
    failureRedirect : '/login',
    successFlash: false
});

module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in first');
        return res.redirect('/login')
    }
    next()
};

module.exports.redirectIfLoggedIn = (req, res, next)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();

};

module.exports.storeReturnTo = (req, res, next) => {
    // Check if returnTo is in the request body (sent from the form)
    if (req.body.returnTo) {
        res.locals.returnTo = req.body.returnTo;
    } 
    // Fall back to session if available
    else if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
        delete req.session.returnTo; // Clear it after use
    }
    // Fall back to referer header, but exclude login/signup pages
    else if (req.get('referer')) {
        const referer = req.get('referer');
        // Only use referer if it's not a login/signup page
        if (referer && !referer.includes('/login') && !referer.includes('/signup')) {
            res.locals.returnTo = referer;
        }
    }
    next();
};