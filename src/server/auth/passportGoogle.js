const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models/index');
const callbackURL = process.env.NODE_ENV === 'production' ?
  '' :
  'http://localhost:3000/login/google/return';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    // console.log(JSON.stringify(profile, null, 2));
    db.User
      .findOrCreate(profile)
      .then(user => cb(null, user))
      .catch(err => cb(err, null));
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err, null));
});

module.exports = passport;