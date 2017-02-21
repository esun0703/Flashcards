// var inquire = require ("inquirer")
//Require Cloze.js 
var cloze = require ("./cloze.js");
//Require Basic.js
var basic = require ("./basic.js");
var fs = require ("fs");
const inquirer = require("inquirer");

// inquirer.prompt([
// 	{
// 		type: "checkbox",
// 		message: "What Would You Like To Do?",
// 		choices: ["Add Card", "Review Card", "Exit"],
// 		name: "reviewOrAdd"
// 	},

// 	{
// 		type: "checkbox",
// 		message: "What Kind of Card?",
// 		choices: ["Basic", "Cloze"],
// 		name: "cardType"

// 	},

// 	{
// 		type: "input",
// 		message: "give me a question?",
// 		name: "question"
// 	},

// 	{
// 		type: "input",
// 		message: "what is the answer?",
// 		name: "answer"
// 	}
// ]).then(function(user){
// 	if(user.reviewOrAdd.choices===user.reviewOrAdd.choices[0]) {
// 		console.log("Added Card");
// 	} else if (user.reviewOrAdd==="Review Card") {
// 		console.log("review Card");
// 	} else if (user.reviewOrAdd==="Exit"){
// 		console.log("exit");
// 	}
// });

// if (newAction === "add") {
// 	var cardType = process.argv [3] //node basicProcess.js add/review basic/cloze 
// 	var question = process.argv [4] //node basicProcess.js add/review basic/cloze "question?"
// 	var answer = process.argv [5] //node basicProcess.js add/review basic/cloze "answer"

// 	inquirer.prompt([
// 	// The question set should include at least one:
// 	//    - Basic input,
// 	//    - Password,
// 	//    - List,
// 	//    - Checkbox,
// 	//    - and Confirm
// {
// 	type:"input",
// 	message: "What is your name?",
// 	name:"name"
// }, 
// } else if (newAction === "review") {
// 	//read file
// 	if (cardType==="basic"){
// 		console.log("review basic");
// 		fs.readFile("flashcards.txt", "utf8", function(err, data){//usually always use utf8, sometimes utf16
// 			//print contnets of data
// 			console.log(data);
// 			//split information by commas
// 			var dataArr = data.split("'")
// 			//redisplay the content as an array for later use.
// 			for(let i=0; i<dataArr.length; i++){
// 				console.log(dataArr[i].trim());
// 			}

// 		})
// 	}
// } else if (cardType = "cloze") {
// 		console.log("review cloze")
// 		if (cardType==="cloze"){
// 		console.log("review cloze");
// 		fs.readFile("clozeflashcards.txt", "utf8", function(err, data){//usually always use utf8, sometimes utf16
// 			//print contnets of data
// 			console.log(data);
// 			//split information by commas
// 			var dataArr = data.split("'")
// 			//redisplay the content as an array for later use.
// 			for(let i=0; i<dataArr.length; i++){
// 				console.log(dataArr[i].trim())
// 			}

// 		})
// 	}
// }
