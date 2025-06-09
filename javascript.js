
//Select container
const container = document.querySelector(".container");

//Get Number and size of each square to fit into container
const containerSize = 600;
let sideSquares = 150;
let totalSquares = sideSquares**2;
let squareSize = containerSize/sideSquares;

for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", `background: white; height: ${squareSize}px; width: ${squareSize}px;`);

    //Change square color if hovered
    square.addEventListener("mouseover", () => {
        square.style.background = "blue";
    })

    container.appendChild(square);
}

//Select input and button
const enterSizeButton = document.querySelector("#buttonEnter");
const inputBox = document.querySelector('.inputSize');

enterSizeButton.addEventListener("click", () => {
    const side = +inputBox.value;
    
    //Delete canvas
    canvas = document.querySelectorAll(".square");
    canvas.forEach((square) => square.remove());

    //Create new canvas using input value
    
});