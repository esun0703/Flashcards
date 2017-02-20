"use strict";
const inquire = require("inquirer")
const fs = require("fs");
// var question = processJS.

const addOrReview = process.argv [2];
const question = process.argv[3];
const answer = process.argv[4];


//======================================================================================
if (addOrReview === "add") {
	var newBasicCard = new BasicCard (question, answer)
	console.log (newBasicCard);
} else if (addOrReview === "review") {
 	fs.readFile("clozeflashcards.txt", "utf8", function(err, data){
		var dataArr=data.split(",");//can use to separate by "," "/n", just what you want to split at
		for(let i=0; i<dataArr.length; i++){
			console.log(dataArr[i].trim())
		}
	})
};

//================================================================================================
function BasicCard (basicFront, basicBack) {//added capitalization in "basic"
	if(!(this instanceof BasicCard)) {
		return new BasicCard (basicFront, basicBack)
	}
	this.basicFront=basicFront;
	this.basicBack=basicBack;
	saveBasicCard(this.basicFront, this.basicBack);
	// console.log (this);
};

function saveBasicCard (saveBasicFront, saveBasicBack){
	fs.appendFile('flashcards.txt', "\n\ ' " + saveBasicFront +  "," +  saveBasicBack + "'", 'utf8', function(error) {
		console.log("saved new basic card");
        if (error) {
            log('error' + error);
        }
	});
};





