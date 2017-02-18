"use strict";
const inquire = require("inquirer")
const processJS = require("./process.js");
const fs = require("fs");
// var question = processJS.
function ClozeCard (front, back) {//added capitalization in "basic"
	if(!(this instanceof ClozeCard)) {
		return new ClozeCard (front, back)
	}
	this.front=front;
	this.back=back;
	saveClozeCard(this.front, this.back);
	// console.log (this);

};

function saveClozeCard (front, back){
	fs.appendFile('clozeflashcards.txt', "\n\ [ " + front +  "," +  back + "]", 'utf8', function(error) {
		console.log(front, back);
        if (error) {
            log('error' + error);
        }
	});
};

// ClozeCard.prototype.readCard= function (){
// 	console.log(this.front);
// 	console.log(this.back);
// }

var newClozeCard = new ClozeCard ("Who Sang 'Wrecking Ball'", "Miley Cyrus");
module.exports = ClozeCard;