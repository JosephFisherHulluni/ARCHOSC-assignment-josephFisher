// Keeps track of which image is currently shown
let showingFirstImage = 0;

// Get references to HTML elements
const displayedImagelab1 = document.getElementById("displayedImagelab1");
const switchButton = document.getElementById("switchButton")
// Set the initial image when the page loads
displayedImagelab1.src = "pictures/yml stuff.png";

switchButton.addEventListener("click", function () {

    showingFirstImage++;
    // Check which image is currently displayed and switch
    switch (showingFirstImage){
    case 1: displayedImagelab1.src="pictures/Screenshot 2026-03-03 123848.png"; document.getElementById("labtext").innerHTML="...to push a version of the website to a github VM when i commit a new version..."; break;
    case 2: displayedImagelab1.src="pictures/Screenshot 2026-01-27 105552.png"; document.getElementById("labtext").innerHTML="...then I took a premade screenshot..."; break;
    case 3: displayedImagelab1.src="pictures/Screenshot 2026-01-27 110445.png";  document.getElementById("labtext").innerHTML="...remade it and then saved it..."; break;
    case 4: displayedImagelab1.src="pictures/website pic.png";  document.getElementById("labtext").innerHTML="... after which i made a temporary demonstrative website which is now used as the contents page."; break;
    case 5:  showingFirstImage=0; displayedImagelab1.src="pictures/git stuff.png";  document.getElementById("labtext").innerHTML="" break; break;
}});