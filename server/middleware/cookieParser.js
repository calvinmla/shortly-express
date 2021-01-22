

const parseCookies = (req, res, next) => {
  // use promises whenever we can
  // Req is incoming cookies
  var cookies = {};
  if (!req.headers.cookie) {
    return req.cookies = {};
  } else {
    var cookieArray = req.headers.cookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
      // console.log(cookieArray[i]);
      var cook = cookieArray[i].trim();
      cook = cook.split('=');
      // console.log('Cook', cook);
      // console.log('key', cook[0]);
      // console.log('value', cook[1]);
      cookies.cook[0] = cook[1];
      console.log(cookies);
    }
    return req.cookies = cookies;
  }

  //   const splitCookies = (string) => {
  //     var cookieArray = string.split(';');


  //     for (var i = 0; i < cookieArray.length; i++) {
  //       var cook = cookieArray[i].split('=');
  //       console.log('COOK', cook);
  //       req.cookies.cook[0] = cook[1];
  //       // console.log(req.cookies);
  //     }
  //   };
  //   return req.cookies;
  // }
  // splitCookies(req.headers.cookie);
};



module.exports = parseCookies;