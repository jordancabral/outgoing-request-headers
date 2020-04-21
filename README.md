# outgoing-request-headers

Module to set headers to all outbound http/https calls

## Installation

```sh
npm install outgoing-request-headers
```

## Description

*outgoing-request-headers* is a function that receives another function that returns headers object ({'header-1': 'value1', 'header2': 'value2'}).
Appends all retrieved headers to all outbound http and https calls.

Its original designed to be used along with some type of middleware that retrieves headers with tracking ids, and automatically send it to other microservices.
This way you cant send any trace-id along all the MS requests flow.

## Usage

```javascript
const outgoingHeaders = require("outgoing-request-headers")
outgoingHeaders(getHeadersFunction);
```

Example mocked function:

```javascript
getHeadersFunction = () => { return {'my-header': 'my-value'} };
```

## How it works

This function overrides node http.request and https.request functions, to always add the headers retrieved from received function.

## TODO'S

- Tests (actual tests are examples)
- Tests/examples with more http client libs
- Tests/examples without need of echo-server docker run
