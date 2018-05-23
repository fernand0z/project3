const router = require('express').Router();
const passport = require('./passportGoogle.js');
const SCOPES = [
  'https://www.googleapis.com/auth/plus.login',
  'https://www.googleapis.com/auth/plus.profile.emails.read'
];

router.use(require('express-session')({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

router.use(passport.initialize());
router.use(passport.session());

// router.get('/login', (req, res) => {
//   res.send(`<a href="/login/google">Log In with Google</a>`);
// });

router.get('/login/google',
  passport.authenticate('google', { scope: SCOPES }));

router.get('/login/google/return',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // console.log(req.user);
    res.redirect('/');
  });

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

function requireAuth(req, res, next) {
  if(!req.user) {
    res.status(401).end();
  } else {
    next();
  }
}

// require quth middleware
router.use('/api', requireAuth);

router.get('/api/user', (req, res) => {
  res.json(req.user);
});

module.exports = router;