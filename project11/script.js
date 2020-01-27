var enterButton = document.getElementById("enter");
//var but=document.createElement("button");
//but.appendChild(document.createTextNode("S"));
//enterButton.appendChild(but);
enterButton.appendChild(document.createTextNode("S"));


var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
}

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		createListElement();
	}
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
