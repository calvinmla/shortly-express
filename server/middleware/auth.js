const models = require('../models');
const Promise = require('bluebird');

// Session object should have unique hash,


module.exports.createSession = (req, res, next) => {
  // return models.session.create()
  //   .then(hash => {
  //     return models.get({id: })
  //   })
  //   .then()
  if (!req.cookies.shortlyid) {
  // if (Object.entries(req.cookies).length === 0) {
    return models.Sessions.create()
      .then(sessionData => {
        return models.Sessions.get({ id: sessionData.insertId });
      })
      .then(SessionDataTable => {
        console.log('SessionDataTable', SessionDataTable);
        req.session = SessionDataTable;
        res.cookie('shortlyid', req.session.hash);
        next();
      });
  } else {
    console.log(req.cookies);
    return models.Session.get({ id: req.cookies.shortlyid })
      .then(SessionDataTable => {
      });
  }
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
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

