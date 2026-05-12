// Keeps track of which image is currently shown
let showingFirstImage = 0;

// Get references to HTML elements
const displayedImagelab1 = document.getElementById("displayedImagelab1");
const switchButton = document.getElementById("switchButton")
// Set the initial image when the page loads
displayedImagelab1.src = "pictures/Screenshot 2026-03-03 124009.png";

switchButton.addEventListener("click", function () {

    showingFirstImage++;
    // Check which image is currently displayed and switch
    switch (showingFirstImage){
    case 1: displayedImagelab1.src="pictures/Screenshot 2026-03-03 111401.png"; document.getElementById("labtext").innerHTML="...checked the IP addresses of both virtual machines..."; break;
    case 2: displayedImagelab1.src="pictures/Screenshot 2026-03-03 112643.png"; document.getElementById("labtext").innerHTML="...pinged them to make sure they were online..."; break;
    case 3: displayedImagelab1.src="pictures/Screenshot 2026-02-24 121330.png"; document.getElementById("labtext").innerHTML="...and uploaded my html, js and css to run the website on the vm using github runners..."; break;
    case 4: displayedImagelab1.src="pictures/Screenshot 2026-02-24 124545.png"; document.getElementById("labtext").innerHTML="...then used a 2nd vm to edit my html and style sheets without changing the main profile."; break;
    case 5: showingFirstImage=0; displayedImagelab1.src="pictures/Screenshot 2026-03-03 124009.png";  document.getElementById("labtext").innerHTML="Opened a temporary VM for the lab..."; break;
}});