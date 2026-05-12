// Keeps track of which image is currently shown
let showingFirstImage = 0;

// Get references to HTML elements
const displayedImagelab1 = document.getElementById("displayedImagelab1");
const switchButton = document.getElementById("switchButton")
// Set the initial image when the page loads
displayedImagelab1.src = "pictures/scheduling.png";
displayedImagelab1.style.transform="scale(3)";
displayedImagelab1.style.position="fixed";
displayedImagelab1.style.bottom="50%";
displayedImagelab1.style.left="43%";
switchButton.addEventListener("click", function () {

    showingFirstImage++;
    // Check which image is currently displayed and switch
    switch (showingFirstImage){
    case 1: document.getElementById("labtext").innerHTML="...theres 3 main routes for CPU scheduling..."; break;
    case 2: document.getElementById("labtext").innerHTML="...long term scheduling, wherein both priority and execution time are considered..."; break;
    case 3: document.getElementById("labtext").innerHTML="...short term scheduling/queue scheduling, which only cares about the first instruction then the second etc, like waiting in line at a shop..."; break;
    case 4: document.getElementById("labtext").innerHTML="...and round robin scheduling, which times each process for a fixed duration and if it's incomplete it recycles the process to the back of the line"; break;
    case 5: showingFirstImage=0; document.getElementById("labtext").innerHTML="to view the ways CPUs schedule actions based on priority and exec time..."; break;
}});