// 1. get the element we want (maybe document.getElementById?)
// 2. elementVariableName.click or addEventListener syntax

//declare counter variable
var clicks = 0;

// clicker handler function. Assign handlers to page events.
window.onload = function(){

	document.querySelector("img#pic").addEventListener("click", clickCounter)

}

// track total clicks - increment the counter variable
function clickCounter(event) {
	clicks++;

	outputClicks();
}

// output click count to container in DOM


function outputClicks(){
	var output = document.getElementById("result");
	var output2 = document.getElementById("title").innerHTML = clicks;
	/*
      Clear the existing contents of the "list" element. Then, for each object in courseList,
      create an li element that holds the course's name and grade, and append
      it to the "list" ul element.
    */
	output.innerHTML = "";
	console.log(output);

	if (clicks === 1) {
		output.innerHTML = "Koala has been klicked " + clicks + " time.";
	} else {
		output.innerHTML = "Koala has been klicked " + clicks + " times.";
	}

	if(clicks === 10 || clicks == 20) {
		output.setAttribute("class","color");
	} else {
		output.removeAttribute("class","color");
	}
}