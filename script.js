// Variable to that contains container for 16x16 grid
const motherDiv = document.querySelector(".bigBox");
const gridButton = document.querySelector("#gridButton");

// Function for human input grid that appends to motherDiv
gridButton.addEventListener("click", (event) => {
    const grid = prompt("Please enter a number to generate new grid (e.g. 100 = 100 x 100 grid square)", "");

    // Ensure grid is a valid number
    const gridSize = parseInt(grid);
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
        alert("Invalid number. You are an infidel");
        return;
    };

    // Clear current grid
    motherDiv.innerHTML = '';

    // Calculate new squares based on fixed div size and new grid parameters. Client width used relative to client's window.
    const squareSize = motherDiv.clientWidth / gridSize;

    // Calculation for new grid
    for (let i = 0; i <= gridSize * gridSize; i++) {
        const div = document.createElement("div");
        // Add CSS class for div for precise handling
        div.classList.add('babyDiv');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        motherDiv.appendChild(div);
}});

motherDiv.addEventListener("mouseover", (event) => {
    const rainbow = ["red", "green", "blue"];
    const colourPicker = rainbow[Math.floor(Math.random() * rainbow.length)];
    
    if (event.target.classList.contains('babyDiv')) {
            event.target.style.backgroundColor = colourPicker;
    };
});

