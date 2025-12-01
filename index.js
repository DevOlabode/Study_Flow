require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');

const session = require('express-session');
const flash = require('connect-flash');

const {sessionConfig} = require('./config/session');

const authRoutes = require('./routes/auth');

require('./config/db')();

const User = require('./models/user');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(session(sessionConfig));
app.use(flash())

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, "views")));

app.use('/', authRoutes);

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, "views", "index.html"));
})

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`App is Listening on PORT ${PORT}`));