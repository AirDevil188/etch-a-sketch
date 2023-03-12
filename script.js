/* DOM */

// grid-container //
const container = document.querySelector('.container');
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
container.appendChild(buttonContainer);
container.appendChild(gridContainer);

// button-container and a button element //

const changeGridButton = document.createElement('button');
changeGridButton.classList.add('button-grid')
buttonContainer.appendChild(changeGridButton);
changeGridButton.textContent = "CHANGE GRID";

// function for the grid size //

function gridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

// for loop for creating squares //

    for (let i = 0; i < size * size; i++) {
        const squares = document.createElement('div');
        gridContainer.appendChild(squares);

        // Event Listener for changing background color of squares when hovering //
        squares.addEventListener('mouseover', () => {
            squares.setAttribute('style', 'background-color: red; border: 3px solid black')
        })

        // function that resets the grid //

        function clearGrid() {
            changeGridButton.addEventListener('click', () => {
                squares.removeAttribute('style', 'background-color: red; border: 3px solid black')
            })
        }
        clearGrid();
    }
    
}

gridSize(16)
