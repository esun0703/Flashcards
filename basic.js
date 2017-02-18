"use strict";
const inquire = require("inquirer")
const processJS = require("./basicProcess.js");
const fs = require("fs");
// var question = processJS.
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
	fs.appendFile('flashcards.txt', "\n\ [ " + saveBasicFront +  "," +  saveBasicBack + "]", 'utf8', function(error) {
		console.log("saved new basic card")
        if (error) {
            log('error' + error);
        }
	});
};



//Need Promises For This To Work.
// BasicCard.prototype.readCard = function (){ 
// 	inquire.prompt([
// 		{
// 		  type: "input",
// 		  message: this.front,
// 		  name: "answerQuestion"
// 		},
// 	]).then(function(card){
// 		console.log(JSON.stringify(user, null, 2));
// 		if(card.answerQuestion===this.back){
// 			console.log("correct! The Answer Is Indeed " + this.back);
// 		} else {
// 			console.log("sorry! The Answer Is " + this.back)
// 		};
// 	});
// };
// newCard.readCard();

// BasicCard.prototype.readCard= function (){
// 	console.log(this.front);
// 	console.log(this.back);
// }

// BasicCard.prototype.readBack = function(){
// 	setTimeout(function(){
// 		console.log(this.back);
// 	},2000)
// }


var newBasicCard = new BasicCard ("Who was the first president of the united states?", "George Washington")

// newCard.readCard();




