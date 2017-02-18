//Install Node
//Install Inquire
//Require Inquire
	var inquire = require ("inquirer")
//Require Cloze.js 
	var cloze = require ("./cloze.js")
//Require Basic.js
	var basic = require ("./basic.js")
// Two Choices: Add or Review
	//Would You Like To Add or Review?
	// inquire.prompt([
	// 	{
	// 	  type: "list",
	// 	  message: "Would You Like To Add or Review?",
	// 	  choices: ["Add", "Review"],
	// 	  name: "addOrReview"
	// 	},
	// ]).then(function(user){
	// 	console.log(JSON.stringify(user, null, 2));
	// 	if(user.addOrReview==="Add"){
	// 		inquire.prompt([
	// 			{
	// 			  type: "list",
	// 			  message: "What Type Of Card Would You Like To Add?",
	// 			  choices: ["Basic", "Cloze"],
	// 			  name: "BasicOrCloze"	
	// 			}
	// 		])
	// 	}
	// });
//If Add: Ask Basic or Cloze? (inquire)//write file
	//What type of flashcard would you like to add? Basic Close?
		//Front? Input
		//Back? Input
	//Basic
		//constructor: argument 1: front, argument 2: back (done)
	//Close
		//constructor: argument 1: front, argument 2: back
//If Review: Ask Basic or Cloze? (inquire)//Read File
	//Basic?
	//Close

