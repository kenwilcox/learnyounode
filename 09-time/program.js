var net = require('net');

function zeroPad(i) {
	// add a zero and return the last two
	return ('0' + i).slice(-2);
}

// returns the date in the format specified
// only understands zero padded at the moment
function getDate(format) {
	var date = new Date();
	format = format.replace(/YYYY/g, date.getFullYear());
	format = format.replace(/MM/g, zeroPad(date.getMonth() + 1));
	format = format.replace(/DD/g, zeroPad(date.getDate()));
	format = format.replace(/hh/g, zeroPad(date.getHours()));
	format = format.replace(/mm/g, zeroPad(date.getMinutes()));
	return format;
}

console.log(getDate("YYYY-MM-DD hh:mm"));

var server = net.createServer(function (socket) {
  socket.write(getDate("YYYY-MM-DD hh:mm"));
  socket.end("\n");
});
server.listen(process.argv[2]);