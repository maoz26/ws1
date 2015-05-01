//modules
var http = require ('http');
var events = require('events');
var util = require('util');
var MedalList = require('./medalMod');

//vars
msg="";
var temp = { medals : '0',}
var medalList = MedalList.getInstance(0);

medalList.plus();
medalList.plus();
medalList.minus();
medalList.plus();
medalList.minus();
medalList.minus();

var server = http.createServer('testServer');
function testServer(req,res){
	res.writeHead(200,{"contant-Type":"text/plain"})
	res.write(msg);
	res.end()
}

server.listen(3000,"127.0.0.1");