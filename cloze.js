"use strict";
const inquire = require("inquirer")
// const processJS = require("./basicProcess.js");
const fs = require("fs");

//node cloze.js add "Miley Cyrus Sang Wrecking Ball" "Miley Cyrus"
const addOrReview = process.argv [2];
const question = process.argv[3];
const answer = process.argv[4];


//...This can be taken out once I figure out inquirer in basicProcess.js======================================================================================
if (addOrReview === "add") {
	var newClozeCard = new ClozeCard (question, answer);
	console.log (newClozeCard);
} else if (addOrReview === "review") {
 	fs.readFile("clozeflashcards.txt", "utf8", function(err, data){
		var dataArr=data.split(",");//can use to separate by "," "/n", just what you want to split at
		for(let i=0; i<dataArr.length; i++){
			console.log(dataArr[i].trim());
		}

	})
}


//======================================================================================
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

//======================================================================================
//Saves the individual card to clozeflashcards.txt
function saveClozeCard (saveClozeFront, saveClozeBack){
	fs.appendFile('clozeflashcards.txt', "\n\ ' " + saveClozeFront +  ", " +  saveClozeBack + "'", 'utf8', function(error) {
		// console.log("Question: '" + saveClozeFront + "', Answer: " + saveClozeBack);
        if (error) {
            log('error' + error);
        }
	});
};
