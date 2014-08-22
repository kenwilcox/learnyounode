var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response) {
  if (request.method === "POST") {
  	request.pipe(map(function (stream) {
  		return stream.toString().toUpperCase();
  	})).pipe(response);
  } else {
  	response.end('I only do POST!\n');
  }
});
server.listen(process.argv[2]);