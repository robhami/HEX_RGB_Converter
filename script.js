var userInput= document.getElementById("userInput");
let button = document.getElementById("button-addon2");
let resultVal =document.getElementById("resultVal");
let inputVal =document.getElementById("inputVal");
let codeVal =document.getElementById("codeVal");

let rgbInputArray = [];
let codeType="";
let hexOutput = "";
let rgbOutput = [];
let result = "";

function formSubmit () {
//get input value
	document.getElementById("results").className ="hidden";
	userInput= document.getElementById("userInput").value;
	console.log(userInput);
	checker(userInput);
// run function to determine CodeType then run relevant conversion
	rgbOrHex();
// use createListElement function to add details to results
	createListElement(result, resultVal);
	createListElement(userInput, inputVal);
	createListElement(codeType, codeVal);
	console.log("result", result);
	
// make results visible
	document.getElementById("results").className ="visible";
		

}
	

function checker (inputCheck) {
	console.log("checker");
	var x = inputCheck.length;
	console.log(x);
	
	if (/[0-9a-f^#]/i.test(inputCheck) && (x===7 || x===9)) {
		// alert("valid entry");
		console.log("valid entry");
		getResult();

	} else {
		alert("invalid numbers, letters or length");
		throw("invalid numbers, letters or length");
		console.log(inputCheck.length);
		
	}

}


//  
function getResult () {

	rgbOrHex();
	// use createListElement function to add details to results
	createListElement(result, resultVal);
	createListElement(userInput, inputVal);
	createListElement(codeType, codeVal);
	// make results visible
	document.getElementById("results").className ="visible";

}


// function dropDown (selectText) {
// 	// assign dropdown value to d variable
// 	let d=document.getElementById(selectText).text

// 	//alert(d);
// 	//change dropdown value to d variable
// 	dropdownMenuButton.textContent = d;
// }


function rgbOrHex () {

	//if starts with # set codeType as Hex Color Code 
	if (userInput.startsWith("#")){
		codeType="Hex Colour Code";
	//remove # and reassign code to userInputNum 
		userInputNum=userInput.slice(1,7);
		console.log(userInputNum);
	//send to hexRgb function
		hexToRgb(userInputNum);

	} else {

		console.log(userInput.length);
	// otherwise treat as RGB
		codeType="RGB Colour Code";
	// split input into 3x 3 digit numbers
		rgbInput1 = parseInt(userInput.substring(0,3));
		rgbInput2 = parseInt(userInput.substring(3,6));
		rgbInput3 = parseInt(userInput.substring(6,9));
	//create an array with the 3 digit numbers

		if (rgbInput1>255 || rgbInput2>255 || rgbInput3>255) {

			alert ("3 digit RGB greater than 255");
			throw ("3 digit RGB greater than 255");

		}

		


		rgbInputArray.push(rgbInput1, rgbInput2, rgbInput3);

		console.log(rgbInputArray);
	//send array to rgbToHex function
		rgbToHex(rgbInputArray);
	//reset rgbInputArray
		rgbInputArray = [];
	};

}

function rgbToHex () {

	// reset hexOutput
		hexOutput="";
	// take each 3 digit RGB and send to decToHex for decimal to hexidecimal conversion
	// add them together as hexOutput string
		rgbInputArray.forEach(function(c){
			hexOutput = (hexOutput + decToHex(c))		
		})
	// and add # and assign to result		
			result = "#" + hexOutput;
			console.log(result);
			document.getElementById("color1").value = result;
			return result;
	}


function decToHex (x) {
	
	console.log("x: ", x);
	
	//convert 3 digit RGB numbers to hexadecimal
	let hex=x.toString(16)

	// if single digit result add 0 on front	
	if (hex.length<2) {
		hex= "0" + hex;
	};

	console.log("hex: ",hex);

	//return hex values to rgbHex	
	return hex;

}


function hexToRgb (y) {
	//reset rgbOutput
	rgbOutput=[];
	//take 2 digits and convert to base 10 from base 16 using ParseInt. 16 indicates base 16 to base 10
	rgbOutput1 = parseInt (userInputNum.substring(0,2),16);
	rgbOutput2 = parseInt (userInputNum.substring(2,4),16);
	rgbOutput3 = parseInt (userInputNum.substring(4,6),16);
	//create an array 
	rgbOutput.push(rgbOutput1, rgbOutput2, rgbOutput3);

	//assign to result and return	
	result = rgbOutput;
	console.log(result);
	return result;
	
}

function createListElement(outputs, listItem) {
	result="";
	// if resultVal childNodes exist (i.e. greater than 2), delete all displayed values
	if ((resultVal.childNodes.length)>2){
		deleteListElement(resultVal);
		deleteListElement(codeVal);	
		deleteListElement(inputVal);
	}
	// create variable for p
	let p =document.createElement("p");
	// add text child node to p with outputs value
	p.appendChild(document.createTextNode(outputs));
	// append listItem with p (i.e. outputs)
	listItem.appendChild(p);
	// reset outputs
	outputs="";
}	
	
function deleteListElement(idRemove) {
	// remove child nodes
	idRemove.removeChild(idRemove.childNodes[1]);
		
}
function createListElement(outputs, listItem) {
// if resultVal childNodes exist (i.e. greater than 2), delete all displayed values
	if ((resultVal.childNodes.length)>2){
		deleteListElement(resultVal);
		deleteListElement(codeVal);	
		deleteListElement(inputVal);
	}
// create variable for p
	let p =document.createElement("p");
// add text child node to p with outputs value
	p.appendChild(document.createTextNode(outputs));
// append listItem with p (i.e. outputs)
	listItem.appendChild(p);
// reset outputs
	outputs="";
}	
	
function deleteListElement(idRemove) {
// remove child nodes
	idRemove.removeChild(idRemove.childNodes[1]);
		
}

	

