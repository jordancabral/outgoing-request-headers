/*
  Needs echo-service running in local port 3000
  docker run --rm -d -p 3000:80 -d --rm --name echo-server mendhak/http-https-echo
*/

const outgoingHeaders = require('../index');
const axios = require('axios');

getHeadersFunction = () => { return {'my-header': 'my-value'} };
outgoingHeaders(getHeadersFunction);

axios({
  method: 'get',
  url: 'http://localhost:3000'
})
.then(function (response) {
  // verify received headers in returned request 
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});
