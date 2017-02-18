// var inquire = require ("inquirer")
//Require Cloze.js 
var cloze = require ("./cloze.js")
//Require Basic.js
var basic = require ("./basic.js")

var newAction = process.argv[2] //node basicProcess.js add/review 


if (newAction === "add") {
	var newCardType = process.argv [3] //node basicProcess.js add/review basic/cloze 
	var newQuestion = process.argv [4] //node basicProcess.js add/review basic/cloze "question?"
	var newAnswer = process.argv [5] //node basicProcess.js add/review basic/cloze "answer"
	if (newCardType==="basic"){
		basic.BasicCard(newQuestion, newAnswer);
	} else if (newCardType==="cloze"){
		cloze.ClozeCard(newQuestion, newAnswer);
	}
} else if (newAction === "review") {
	//read file
}