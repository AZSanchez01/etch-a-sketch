
//Select container
const container = document.querySelector(".container");

function createCanvas (side = 16, containerSize = 600) {
    let totalSquares = side**2;
    let squareSize = containerSize/side;

    //Create canvas
    for (let i = 0; i < totalSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `background: white; height: ${squareSize}px; width: ${squareSize}px;`);

        //Change square color if hovered
        square.addEventListener("mouseover", () => {
            square.style.background = "darkblue";
        })
        square.addEventListener("touches", () => {
            square.style.background = "darkblue";
        })
        container.appendChild(square);
    }
}

//Select input and button
const enterSizeButton = document.querySelector("#buttonEnter");
const inputBox = document.querySelector('.inputSize');

enterSizeButton.addEventListener("click", () => {
    const side = (+inputBox.value > 200)? 200 : +inputBox.value;

    //Delete canvas
    canvas = document.querySelectorAll(".square");
    canvas.forEach((square) => square.remove());

    //Create new canvas using input value
    createCanvas(side);
});

createCanvas();