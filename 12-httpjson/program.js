var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
	
	var bits = url.parse(request.url, true);
  var date = new Date(bits.query.iso || new Date().getTime());
  var ret;

  if (bits.pathname === "/api/parsetime") {
  	ret = {};
  	ret.hour = date.getHours();
  	ret.minute = date.getMinutes();
  	ret.second = date.getSeconds();  
  } else if (bits.pathname === "/api/unixtime") {
  	ret = {};
  	ret.unixtime = date.getTime();
  } 
  
  if (ret) {
  	var json = JSON.stringify(ret);//, null, 2);
  	response.writeHead(200, {'Content-Type': 'application/json'});
  	response.end(json);
  } else {
  	response.writeHead(404);
  	response.end("I don't know how to do :" + bits.pathname + "\n");  	
  }
});
server.listen(Number(process.argv[2]) || 8080);