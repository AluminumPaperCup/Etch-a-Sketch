// Variable to that contains container for 16x16 grid
const motherDiv = document.querySelector(".bigBox");

// Function for 16x16 grid that appends to motherDiv
for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    motherDiv.appendChild(div);
}