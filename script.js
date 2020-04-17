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

function checker (inputCheck) {
	let x = inputCheck.length;
	//if (/[^0-9a-f#]/i.test(inputCheck) || (inputCheck.length!=7) || (inputCheck.length!=9)) {
		//||
	if ( /[0-9a-f^#]/i.test(inputCheck) &&  (x===7 || x===9)) {
		console.log("valid entry");
		getResult();

	} else {
		console.log("invalid numbers, letters or length");
		console.log(inputCheck.length);
		alert("invalid numbers, letters or length");
		//document.getElementById("resultsCard").className="card text-white bg-danger mb-3";
		errorMessage();
	
	}

}

function getResult () {
// run function to determine CodeType then run relevant conversion
	rgbOrHex();
	createListElement(result, resultVal);
	createListElement(userInput, inputVal);
	createListElement(codeType, codeVal);
	document.getElementById("results").className ="visible";

}


function errorMessage () {
	document.getElementById("resultsCard").className="card text-white bg-danger mb-3";
	createListElement(result, resultVal);
	createListElement(userInput, "Incorrect entry 7 or 9 digits");
	createListElement(codeType, "Not possible");
	document.getElementById("results").className ="visible";
	//break;
}

function dropDown (selectText) {
	// assign dropdown value to d variable
	let d=document.getElementById(selectText).text

	alert(d);
	//change dropdown value to d variable
	dropdownMenuButton.textContent = d;
}

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
	// otherwise treat as RGB
		codeType="RGB Colour Code";
	// split input into 3x 3 digit numbers
		rgbInput1 = parseInt(userInput.substring(0,3));
		rgbInput2 = parseInt(userInput.substring(3,6));
		rgbInput3 = parseInt(userInput.substring(6,9));
	//create an array with the 3 digit numbers
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

function createListElement(input, output) {
// if resultVal childNodes exist (i.e. greater than 2), delete all displayed values
	if ((resultVal.childNodes.length)>2){
		deleteListElement(resultVal);
		deleteListElement(codeVal);	
		deleteListElement(inputVal);
	}

	var p =document.createElement("p")[0];
	p.appendChild(document.createTextNode(input));
	output.appendChild(p);
	input="";

}	
	
function deleteListElement(idRemove) {

	idRemove.removeChild(idRemove.childNodes[1]);
		
}
	
function formSubmit () {
//get input value
	userInput= document.getElementById("userInput").value;
	console.log(userInput);
	checker(userInput);

//create result function
	

}
