const parseCookies = (req, res, next) => {
  if (req.headers.cookie) {
    var cookieArray = req.headers.cookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
      var cook = cookieArray[i].trim();
      cook = cook.split('=');
      req.cookies[cook[0]] = cook[1];
    }
  }
  next();
};

module.exports = parseCookies;