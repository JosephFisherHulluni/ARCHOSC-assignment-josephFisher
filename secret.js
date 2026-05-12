// Keeps track of which image is currently shown
let clicks=0;
// Get references to HTML elements
const switchButton = document.getElementById("switchButton")
const birdImage = document.getElementById("flap");
// Set the initial image when the page loads



switchButton.addEventListener("click", function () {
clicks++;

});