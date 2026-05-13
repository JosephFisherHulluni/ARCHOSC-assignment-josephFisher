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
    case 1: displayedImagelab1.src="pictures/turnaround+normalised turnaround.png"; document.getElementById("labtext").innerHTML="...theres 3 main routes for CPU scheduling...<br>side note; the below code sippet DOES contain code to find the turnaround and normalised turnaround times using the formula Exec time (et)+arrival time (at)/et"; break;
    case 2: displayedImagelab1.src="pictures/gnatt chart.png"; document.getElementById("labtext").innerHTML="...long term scheduling, wherein both priority and execution time are considered...<br>the gnatt chart in the image below, despite having an oversized timeline, does have accurate starts/stops"; break;
    case 3: displayedImagelab1.src="pictures/solution.png"; displayedImagelab1.style.bottom="32%";displayedImagelab1.style.transform="scale(1.2)"; document.getElementById("labtext").innerHTML="...short term scheduling/queue scheduling, which only cares about the first instruction then the second etc, like waiting in line at a shop...<br><br>on the lab document, nothing is mentioned about creating or including a table; as such i do not know what to include"; break;
    case 4: document.getElementById("labtext").innerHTML="...and round robin scheduling, which times each process for a fixed duration and if it's incomplete it recycles the process to the back of the line"; break;
    case 5: displayedImagelab1.src="pictures/scheduling.png"; displayedImagelab1.style.bottom="50%";displayedImagelab1.style.transform="scale(3)"; showingFirstImage=0; document.getElementById("labtext").innerHTML="to view the ways CPUs schedule actions based on priority and exec time..."; break;
}});