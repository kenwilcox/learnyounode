var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	fs.readdir(dir, function(err, files) {
		if (!err) {
			var ret = [];
			files.forEach(function(file) {
				if (path.extname(file) === "." + ext) {
					ret.push(file);
				}
			});
			callback(null, ret);
		} else {
			callback(err);
		}
	});  
}
