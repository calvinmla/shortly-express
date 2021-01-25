const parseCookies = (req, res, next) => {
  if (req.headers.cookie) {
    var cookieArray = req.headers.cookie.split('; ');
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      cookie = cookie.split('=');
      req.cookies[cookie[0]] = cookie[1];
    }
  }
  next();
};

module.exports = parseCookies;