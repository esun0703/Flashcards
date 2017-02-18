"use strict";
const inquire = require("inquirer")
const processJS = require("./process.js");
// var question = processJS.
function BasicCard (front, back) {//added capitalization in "basic"
	if(!(this instanceof BasicCard)) {
		return new BasicCard (front, back)
	}
	this.front=front;
	this.back=back;
	// console.log (this);
}

//Need Promises
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

BasicCard.prototype.readCard= function (){
	console.log(this.front);
	console.log(this.back);
}

// BasicCard.prototype.readBack = function(){
// 	setTimeout(function(){
// 		console.log(this.back);
// 	},2000)
// }


var newCard = new BasicCard ("Who was the first president of the united states?", "George Washington")

newCard.readCard();
// newCard.readBack()



