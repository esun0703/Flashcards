"use strict";
const processJs = require("process.js");
function basicCard (front, back) {
	if(!(this instanceof basicCard)) {
		return new basicCard (front, back)
	}
	this.front=front;
	this.back=back;
}