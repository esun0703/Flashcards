// var inquire = require ("inquirer")
//Require Cloze.js 
var cloze = require ("./cloze.js")
//Require Basic.js
var basic = require ("./basic.js")

var newAction = process.argv[2] //node basicProcess.js add/review 


if (newAction === "add") {
	var cardType = process.argv [3] //node basicProcess.js add/review basic/cloze 
	var question = process.argv [4] //node basicProcess.js add/review basic/cloze "question?"
	var answer = process.argv [5] //node basicProcess.js add/review basic/cloze "answer"
	if (cardType==="basic"){
		basic.BasicCard(question, answer);
	} else if (cardType==="cloze"){
		cloze.ClozeCard(question, answer);
	}
} else if (newAction === "review") {
	//read file
	if (cardType==="basic"){
		console.log("review basic");
		//for loop
	} else if (cardType = "cloze") {
		console.log("review cloze")
	}

}