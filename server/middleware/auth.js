const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {

  Promise.resolve(req.cookies.shortlyid)
    .then(hash => {
      if (!hash) {
        throw hash;
      }
      return models.Sessions.get({ hash });
    })
    .tap(session => {
      if (!session) {
        throw session;
      }
    })
    // initializes a new session
    .catch(() => {
      return models.Sessions.create()
        .then(results => {
          return models.Sessions.get({ id: results.insertId });
        })
        .tap(session => {
          res.cookie('shortlyid', session.hash);
        });
    })
    .then(session => {
      req.session = session;
      next();
    });
};

// if (req.cookies) {
//   // create a unique hash and store in sessions database
//   var hash = hashUtils.createHash(/* not sure what data arg is */);
//   req.session[hash] = hash;
//   // Set a cookie in the response headers
// } else if (hashUtils.compareHash(res.session[hash])) {
//   res.cookies = req.cookies;

// }
// if there are cookies
// Do a compare hash to validate that it is a valid cookie
// res.cookies to equal the cookie object
// else (not valid)
// maybe log into their account

// assign req.cookies data to req.session as an object

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

module.exports.verifySession = (req, res, next) => {
  if (!models.Sessions.isLoggedIn(req.session)) {
    res.redirect('/login');
  } else {
    next();
  }
};