// Variable to that contains container for 16x16 grid
const motherDiv = document.querySelector(".bigBox");
const gridButton = document.querySelector("#gridButton");

// Function for human input grid that appends to motherDiv
gridButton.addEventListener("click", (event) => {
    const grid = prompt("Please enter a number to generate new grid (e.g. 100 = 100 x 100 grid square)", "");

motherDiv.addEventListener("mouseover", (event) => {
    
    if (event.target.classList.contains('babyDiv')) {
            event.target.style.backgroundColor = "gray";
    };
});