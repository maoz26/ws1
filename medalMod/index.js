var events = require('events');
var util = require('util');
util.inherits(MedalList, events.EventEmitter);


//medals function//
MedalList.prototype.plus = function (){
	this.medals +=1;
	console.log("added 1");
	msg+="added 1\r\n";
	this.emit("updated");
};
MedalList.prototype.minus = function(){
	if (this.medals==0) {
		console.log("You have no medals");
		msg+="You have no medals\r\n";
	}
	else{
	console.log("removed 1");
	msg+="removed 1\r\n";
	}
	if (this.medals > 0){
		this.medals-=1;
		this.emit("updated");
	}
};

//events callback
function show  (){
	console.log("you have " + this.medals +" medals");
	msg+="you have " + this.medals +" medals \r\n";
}
function zero (){
	if (this.medals == 0){
		console.log("you run out of medals \r\n");
		msg+="you run out of medals \r\n";	
	}
}
function MedalList(info) {
	this.medals = info;
	events.EventEmitter.call(this);
	this.on("updated",zero);
	this.on("updated",show);
}
module.exports = {
	getInstance: function(info) {
      return new MedalList(info);
	}
}
