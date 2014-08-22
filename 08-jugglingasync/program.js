var http = require('http');
var bl = require('bl');
var res = [];
var count = 0;

function printResponses() {
	res.forEach(function (r) {
		console.log(r);
	});
}

function getData(index) {
  http.get(process.argv[2 + index], function (response) {
  	response.pipe(bl(function (err, data) {
  		if (err)
  			return console.error(err);
  		
  		res[index] = data.toString();
  		count++;

  		if (count === 3)
  			printResponses();
  	}));
  });
}

for (var i = 0; i < 3; i++) {
	getData(i);
}