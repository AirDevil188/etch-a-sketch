/* DOM */

// grid-container //
const container = document.querySelector('.container');
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
container.appendChild(gridContainer);

// button-container and a button element //
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
container.appendChild(buttonContainer);
const changeGridButton = document.createElement('button');
buttonContainer.appendChild(changeGridButton);
changeGridButton.textContent = "CHANGE GRID"