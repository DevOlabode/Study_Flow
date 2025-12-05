require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');
const ExpressError = require('./utils/ExpressError')

const session = require('express-session');
const flash = require('connect-flash');

const ejsMate = require('ejs-mate')

const {sessionConfig} = require('./config/session');

const authRoutes = require('./routes/auth');

require('./config/db')();

const User = require('./models/user');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, "views")));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}));
app.engine('ejs', ejsMate);


app.use((req, res, next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.info = req.flash('info');
    res.locals.warning = req.flash('warning')
    next();
});

app.use('/', authRoutes);

app.get('/', (req,res) =>{
  req.flash('success', 'The Homepage')
  res.render('index')
});

app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError('Page not found', 404))
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something Went Wrong!";

  res.render('error', {message, statusCode})
});

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`App is Listening on PORT ${PORT}`));