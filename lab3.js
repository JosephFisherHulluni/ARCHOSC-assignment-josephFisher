// Keeps track of which image is currently shown
let showingFirstImage = 0;

// Get references to HTML elements
const switchButton = document.getElementById("switchButton")
const displayedImage = document.getElementById("displayedImagelab1");
displayedImage.src="pictures/128da28f370af0a0a73c993ffbeeabd0.PNG";
displayedImage.style.height="0px";

document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        displayedImage.style.height="500px";
    }
});


switchButton.addEventListener("click", function () {

    showingFirstImage++;
    // Check which image is currently displayed and switch
    switch (showingFirstImage){
    case 1: document.getElementById("labtext").innerHTML="...The lab's main priority was seeding the basics of this project,<br>wherein we were supposed to a html/css/js file that in effect says 'hey, this is me! i did ____'..."; break;
    case 2: document.getElementById("labtext").innerHTML="...then explaining styles sheets for css, enabling the editing of fonts, colours etc; on the website..."; break;
    case 3: document.getElementById("labtext").innerHTML="...and the final segment was attempting to explain navigation bars and user accessibility (such as a dark mode setting)<br><br>press A for a surprise by the way!"; break;
    case 4: showingFirstImage=0;document.getElementById("labtext").innerHTML="However, a brief summation may help in believing I know the principles of the lab..."; break;
}});