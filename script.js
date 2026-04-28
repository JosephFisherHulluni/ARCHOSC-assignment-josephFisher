// Paths to the two images
const image1 = "pictures/git stuff.png";
const image2 = "pictures/github_repo.png";
const image3 = "pictures/yml stuff.png";
// Keeps track of which image is currently shown
let showingFirstImage = true;

// Get references to HTML elements
const displayedImage = document.getElementById("displayedImage");
const switchButton = document.getElementById("switchButton");
const displayedImagelab1 = document.getElementById("displayedImagelab1");
const displayedImagelab2 = document.getElementById("displayedImagelab2");
// Set the initial image when the page loads
displayedImagelab1.src = "pictures/git stuff.png";


// Switch between images when the button is clicked
switchButton.addEventListener("click", function () {

    // Check which image is currently displayed and switch
    if (showingFirstImage) {
        displayedImage.src = image2;
    } else {
        displayedImage.src = image1;
    }

    // Flip the boolean so next click switches again
    showingFirstImage = !showingFirstImage;
});