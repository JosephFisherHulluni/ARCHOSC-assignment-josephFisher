// Keeps track of which image is currently shown
let showingFirstImage = 0;

// Get references to HTML elements
const switchButton = document.getElementById("switchButton")
// Set the initial image when the page loads

switchButton.addEventListener("click", function () {

    showingFirstImage++;
    // Check which image is currently displayed and switch
    switch (showingFirstImage){
    case 1: document.getElementById("labtext").innerHTML="...the main info was that searching through memory uses a compounding-library within ram/vmem through pages and offsets<br><br>this being significantly more efficient than storing direct data locations..."; break;
    case 2: document.getElementById("labtext").innerHTML="...the goal was to understand this aspect of memory management due to its importance in the performance of a system, which is a major part of computing..."; break;
    case 3: document.getElementById("labtext").innerHTML="...the TLB simulation that we had accessed and worked on demonstrated both TLB hits and misses"; break;
    case 4: showingFirstImage=0;  document.getElementById("labtext").innerHTML="However lab 7 also was the one that leaned most into the physical aspects of the topic..."; break;
}});