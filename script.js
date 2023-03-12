/* DOM */

// grid-container //
const container = document.querySelector(".container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
container.appendChild(buttonContainer);
container.appendChild(gridContainer);

// button-container and a button element //

const changeGridButton = document.createElement("button");
changeGridButton.classList.add("button-grid");
buttonContainer.appendChild(changeGridButton);
changeGridButton.textContent = "CHANGE GRID";

/* DOM */

changeGridButton.addEventListener("click", () => {
  userDefinedGrid();
});

// function that creates the grid based on the input of the user //

function userDefinedGrid() {
  let number = prompt("Please select the size of your grid between 1-100.");
  if (number < 101) {
    gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    gridSize(number);
  } else {
    alert("ERROR! Please enter the number that is smaller or equal to 100.");
  }
}

// function for the grid size //

function gridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // for loop for creating squares //

  for (let i = 0; i < size * size; i++) {
    const squares = document.createElement("div");
    gridContainer.appendChild(squares);

    // Event Listener for changing background color of squares when hovering //
    squares.addEventListener("mouseover", () => {
      squares.setAttribute(
        "style",
        "background-color: red; border: 3px solid black"
      );
    });

    // function that resets the grid //

    function clearGrid() {
      changeGridButton.addEventListener("click", () => {
        squares.removeAttribute(
          "style",
          "background-color: red; border: 3px solid black"
        );
      });
    }
    clearGrid();
  }
}

gridSize(16);
