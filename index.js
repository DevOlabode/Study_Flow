require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');
const ExpressError = require('./utils/ExpressError')

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
});

app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError('Page not found', 404))
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something Went Wrong!";

  res.status(statusCode).send(`
    <!DOCTYPE html>
    <html>
      <head><title>Error ${statusCode}</title></head>
      <body>
        <h1>Error ${statusCode}</h1>
        <p>${message}</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`App is Listening on PORT ${PORT}`));