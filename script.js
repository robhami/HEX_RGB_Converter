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

		userInput= document.getElementById("userInput").value;
		console.log(userInput);

	if (userInput.startsWith("#")){
		codeType="Hex Colour Code";
		userInputNum=userInput.slice(1,7);
		console.log(userInputNum);
		hexToRgb(userInputNum);

	} else {
		codeType="RGB Colour Code";
		rgbInput1 = parseInt(userInput.substring(0,3));
		rgbInput2 = parseInt(userInput.substring(3,6));
		rgbInput3 = parseInt(userInput.substring(6,9));

		rgbInputArray.push(rgbInput1, rgbInput2, rgbInput3);

		console.log(rgbInputArray);

		rgbToHex(rgbInputArray);
		rgbInputArray = [];
	};

	function decToHex (x) {

		let hex=x.toString(16)
		
		if (hex.length<2) {
			hex= "0" + hex;
		};

		return hex;
	}

	function rgbToHex () {

		hexOutput="";
		rgbInputArray.forEach(function(c){
			hexOutput = (hexOutput + decToHex(c))		
		})
			
			result = "#" + hexOutput;
			console.log(result);
			return result;
	}

	function hexToRgb (y) {
		rgbOutput=[];
		rgbOutput1 = parseInt (userInputNum.substring(0,2),16);
		rgbOutput2 = parseInt (userInputNum.substring(2,4),16);
		rgbOutput3 = parseInt (userInputNum.substring(4,6),16);

		rgbOutput.push(rgbOutput1, rgbOutput2, rgbOutput3);
		
		result = rgbOutput;
		console.log(result);
		return result;
		
	}

	function createListElement(input, output) {
		if ((resultVal.childNodes.length)>2){
			deleteListElement(resultVal);
			deleteListElement(codeVal);	
			deleteListElement(inputVal);
		}

		var p =document.createElement("p");
		p.appendChild(document.createTextNode(input));
		output.appendChild(p);
		input="";

	}

	
	function deleteListElement(idRemove) {

		idRemove.removeChild(idRemove.childNodes[1]);
		
	}

	createListElement(result, resultVal);
	createListElement(userInput, inputVal);
	createListElement(codeType, codeVal);

	document.getElementById("results").className ="visible";

};
