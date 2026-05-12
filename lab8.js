// Keeps track of which image is currently shown
let showingFirstImage = 0;

// Get references to HTML elements
const switchButton = document.getElementById("switchButton")
// Set the initial image when the page loads

switchButton.addEventListener("click", function () {

    showingFirstImage++;
    // Check which image is currently displayed and switch
    switch (showingFirstImage){
    case 1: document.getElementById("labtext").innerHTML="...banker's algorithm comes with 3 main steps, the request which initiates the process, checking if resources are needed and which resources are spare..."; break;
    case 2: document.getElementById("labtext").innerHTML="...then it fakes the allocation and reviews if it would still be in a safe state, granting or denying the request..."; break;
    case 3: document.getElementById("labtext").innerHTML="...this is INCREDIBLY useful for most systems, however there are certain situations wherein it falters, if the needs seem more spontaneous the system could struggle getting accurate reviews"; break;
    case 4: showingFirstImage=0;  document.getElementById("labtext").innerHTML="a notable part of this was banker's algorithm, which uses mathematical logic to determine whether a<br>system is in a state of safety or whether resources are poorly allocated..."; break;
}});