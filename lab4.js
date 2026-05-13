// Keeps track of which image is currently shown
let showingFirstImage = 0;
let blueMode = true;
// Get references to HTML elements
const switchButton = document.getElementById("switchButton")
const displayedImage = document.getElementById("displayedImagelab1");
displayedImage.src="pictures/128da28f370af0a0a73c993ffbeeabd0.PNG";
displayedImage.style.height="0px";

document.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        displayedImage.style.height="500px";
        document.getElementById("labtext").innerHTML="i also ATTEMPTED to make flappybird from the contents page, but i did NOT have the time";
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "b" || event.key === "B") {

    document.body.style.backgroundColor=blueMode? "#0000FF" : "#ffbfec";
    document.getElementById("labtext").style.color=blueMode? "#ffffff" : "#000000";
    document.getElementById("toptext").style.color=blueMode? "#ffffff" : "#000000";
    blueMode=!blueMode;
    }
});


switchButton.addEventListener("click", function () {

    showingFirstImage++;
    // Check which text is currently displayed and switch
    switch (showingFirstImage){
    case 1: document.getElementById("labtext").innerHTML="...The lab's main priority was seeding the basics of this project,<br>wherein we were supposed to a html/css/js file that in effect says 'hey, this is me! i did ____'..."; break;
    case 2: document.getElementById("labtext").innerHTML="...then explaining styles sheets with css, enabling the editing of fonts, colours etc; on the website (press B to see an example of colour changes)..."; break;
    case 3: document.getElementById("labtext").innerHTML="...and the final segment was attempting to explain navigation bars and user accessibility (such as a dark mode setting)<br><br>press A for a surprise by the way!"; break;
    case 4: showingFirstImage=0;document.getElementById("labtext").innerHTML="However, a brief summation may help in believing I know the principles of the lab..."; break;
}});