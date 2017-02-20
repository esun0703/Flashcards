"use strict";
const inquire = require("inquirer")
const processJS = require("./basicProcess.js");
const fs = require("fs");
// var question = processJS.
function ClozeCard (clozeFront, clozeBack) {//added capitalization in "basic"
	if(!(this instanceof ClozeCard)) {
		return new ClozeCard (clozeFront, clozeBack)
	}
	//saves the clozeFront and the clozeBack from the construction
	this.clozeFront=clozeFront;
	this.clozeBack=clozeBack;
	//replaces the "this.clozeBack" part of the "this.clozeFront" string as "..."
	var saveClozeFront=this.clozeFront.replace(clozeBack, "...");
	var saveClozeBack=this.clozeBack;
	saveClozeCard(saveClozeFront, saveClozeBack);
	// console.log (this);

};

//Saves the individual card to clozeflashcards.txt
function saveClozeCard (saveClozeFront, saveClozeBack){
	fs.appendFile('clozeflashcards.txt', "\n\ [ " + saveClozeFront +  ", " +  saveClozeBack + "]", 'utf8', function(error) {
		// console.log("Question: '" + saveClozeFront + "', Answer: " + saveClozeBack);
        if (error) {
            log('error' + error);
        }
	});
};

// ClozeCard.prototype.readCard= function (){
// 	console.log(this.front);
// 	console.log(this.back);
// }

var newClozeCard = new ClozeCard ("Miley Cyrus Sang Wrecking Ball", "Miley Cyrus");
// module.exports = ClozeCard;