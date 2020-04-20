/*
  Needs echo-service running in local port 3000
  docker run --rm -d -p 3000:80 -d --rm --name echo-server mendhak/http-https-echo
*/

const outgoingHeaders = require('../index');
const rp = require('request-promise');

outgoingHeaders(() => { return {'my-header': 'lala'} });

rp('http://localhost:3000')
.then(function (response) {
  // verify received headers in returned request 
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
