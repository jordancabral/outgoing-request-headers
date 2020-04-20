const outgoingHeaders = (headersFunction) => {

  // http override -----------------------------------
  const http = require('http');
  const originalHttpRequest = http.request;
  // override the function
  http.request = function wrapMethodRequest(req) {
    for (const [key, value] of Object.entries(headersFunction())) {
      req.headers[key] = value;
    }
    return originalHttpRequest.apply(this, arguments);
  }
  module.exports = http;
  // -------------------------------------------------

  // https override ----------------------------------
  const https = require('https');
  const originalHttpsRequest = https.request;
  // override the function
  https.request = function wrapMethodRequest(req) {
    for (const [key, value] of Object.entries(headersFunction())) {
      req.headers[key] = value;
    }
    return originalHttpsRequest.apply(this, arguments);
  }
  module.exports = https;
  // --------------------------------------------------

};

module.exports = outgoingHeaders;
