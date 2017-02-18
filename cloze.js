"use strict";
const inquire = require("inquirer")
const processJS = require("./basicProcess.js");
const fs = require("fs");
// var question = processJS.
function ClozeCard (clozeFront, clozeBack) {//added capitalization in "basic"
	if(!(this instanceof ClozeCard)) {
		return new ClozeCard (clozeFront, clozeBack)
	}
	this.clozeFront=clozeFront;
	this.clozeBack=clozeBack;
	saveClozeCard(this.clozeFront, this.clozeBack);
	// console.log (this);

};

function saveClozeCard (saveClozeFront, saveClozeBack){
	fs.appendFile('clozeflashcards.txt', "\n\ [ " + saveClozeFront +  "," +  saveClozeBack + "]", 'utf8', function(error) {
		console.log(saveClozeFront, saveClozeBack);
        if (error) {
            log('error' + error);
        }
	});
};

// ClozeCard.prototype.readCard= function (){
// 	console.log(this.front);
// 	console.log(this.back);
// }

var newClozeCard = new ClozeCard ("Who Sang Wrecking Ball", "Miley Cyrus");
// module.exports = ClozeCard;