"use strict";
const inquire = require("inquirer")
const processJS = require("./process.js");
// var question = processJS.
function ClozeCard (front, back) {//added capitalization in "basic"
	if(!(this instanceof ClozeCard)) {
		return new ClozeCard (front, back)
	}
	this.front=front;
	this.back=back;
	// console.log (this);

};

ClozeCard.prototype.readCard= function (){
	console.log(this.front);
	console.log(this.back);
}

module.exports = ClozeCard;