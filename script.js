/* DOM */

// heading //
const heading = document.createElement("h1");
heading.classList.add("heading");

// grid-container //
const container = document.querySelector(".container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
container.appendChild(heading);
container.appendChild(buttonContainer);
container.appendChild(gridContainer);

// button-container and a button element. //

const changeGridButton = document.createElement("button");
const randomColorButton = document.createElement("button");
const blackColorButton = document.createElement("button");
const eraserButton = document.createElement("button");
randomColorButton.setAttribute("id", "random-rgb-button");
blackColorButton.setAttribute("id", "black-color-button");
changeGridButton.classList.add("button-grid");
buttonContainer.appendChild(changeGridButton);
buttonContainer.appendChild(blackColorButton);
buttonContainer.appendChild(randomColorButton);
buttonContainer.appendChild(eraserButton);

heading.textContent = "Etch-A-Sketch";
changeGridButton.textContent = "CREATE NEW GRID";
eraserButton.textContent = "ERASER ";
blackColorButton.textContent = "BLACK COLOR";
randomColorButton.textContent = "RANDOM COLOR";

/* DOM */

changeGridButton.addEventListener("click", () => {
  userDefinedGrid();
});

// function that creates the grid based on the input of the user. //

function userDefinedGrid() {
  let number = prompt("Please select the size of your grid between 1-100.");
  if (number > 0 && number < 101) {
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    gridSize(number);
  } else {
    alert("ERROR! Please enter the number that is smaller or equal to 100.");
  }
}

// function for the grid size. //

function gridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // for loop, for creating squares. //

  for (let i = 0; i < size * size; i++) {
    const squares = document.createElement("div");
    gridContainer.appendChild(squares);

    // Event Listener for changing background color of squares when hovering. //
    squares.addEventListener("mouseover", () => {
      squares.setAttribute(
        "style",
        "background-color: black; border: 3px solid white"
      );
    });

    // function for random rgb color. //

    function randomRgbColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      squares.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      squares.style.border = "3px solid white";
    }

    // Event Listener for random rgb color when hovering over squares.//

    randomColorButton.addEventListener("click", () => {
      clearGrid();
      squares.addEventListener("mouseover", () => {
        randomRgbColor();
      });
    });

    // Event Listener for black color when hovering over squares. //

    blackColorButton.addEventListener("click", () => {
      squares.addEventListener("mouseover", () => {
        squares.setAttribute(
          "style",
          "background-color: black; border: 3px solid white"
        );
      });
    });

    // Event Listener for eraser button when hovering over squares. //

    eraserButton.addEventListener("click", () => {
      squares.addEventListener("mouseover", () => {
        squares.setAttribute(
          "style",
          "background-color: white; borer: 3px solid white;"
        );
      });
    });

    // function that resets the grid. //

    function clearGrid() {
      changeGridButton.addEventListener("click", () => {
        squares.removeAttribute("style");
      });
    }
    clearGrid();
  }
}
