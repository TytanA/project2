const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user')
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
},
  async function (accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    let user = await User.findOne({ googleId: profile.id });
    if (user) return cb(null, user);
    try {
      
      const newUser = await User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
      });
      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  }
));

passport.serializeUser(function (user, cb) {
  cb(null, user._id);
});


passport.deserializeUser(function (id, cb) {
  User.findById(id, function (err, user) {
    if (err) return cb(err);
    cb(null, user)
  })
});



