// Keeps track of which image is currently shown
let showingFirstImage = 0;


// Get references to HTML elements
const displayedImagelab1 = document.getElementById("displayedImagelab1");
const switchButton = document.getElementById("switchButton")
// Set the initial image when the page loads
displayedImagelab1.src = "pictures/yml stuff.png";



switchButton.addEventListener("click", function () {
    showingFirstImage++;
    //displayedImagelab1.style.height=`${document.height/5}px`;
    // Check which image is currently displayed and switch
    switch (showingFirstImage){
    case 1: displayedImagelab1.src="pictures/Screenshot 2026-03-03 123848.png"; document.getElementById("labtext").innerHTML="...to push a version of the website to a github VM when I commit a new version..."; break;
    case 2: displayedImagelab1.src="pictures/github look.png";  document.getElementById("labtext").innerHTML="...and now when I git push, github hosts a VM running my html/css/javascript.<br>And as such, the website you're likely using right now <br>is on that github VM"; break;
    case 3: showingFirstImage=0; displayedImagelab1.src="pictures/yml stuff.png";  document.getElementById("labtext").innerHTML="Managed to utilise Yml commands..."; break;
    
}});