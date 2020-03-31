const passport = require('passport');
const strategy = require('passport-local').Strategy;
const { findUser, validatePassword } = require('../db/user');

module.exports = passport.use(new LocalStrategy(
  async function(username, password, next) {
    let result = findUser('username', username); 
    if (result.error) { 
      return next(result); 
    }
    if (validatePassword(result.password, password)) {
      return next(null, false, { message: 'Incorrect password.' });
    }
    return next(null, user);
  }
));