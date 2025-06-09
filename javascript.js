
//Select container
let container = document.querySelector(".container");

//Get Number and size of each square to fit into container
let containerSize = 600;
let sideSquares = 100;
let totalSquares = sideSquares**2;
let squareSize = containerSize/sideSquares;

for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("style", `background: green; height: ${squareSize}px; width: ${squareSize}px;`);

    //Change square color if hovered
    square.addEventListener("mouseover", () => {
        square.style.background = "blue";
    })

    container.appendChild(square);
}
