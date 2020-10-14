function createGrid() {
    let size = prompt("Enter a grid size (1-100): ");
    while (size < 1 || size > 100) {
        size = prompt("Enter a number between 1 and 100")
    }
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = "row";
        row.id = "cell";
        for (let x = 1; x <= size; x++) {
            let cell = document.createElement('div');
            cell.className = "cell";
            cell.id = "cell";
            cell.style.height = 750 / size + 'px';
            cell.style.width = 750 / size + 'px';
            row.appendChild(cell);
        }
    document.getElementById('container').appendChild(row);
    }
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", reset);

const randomColorButton = document.querySelector("#rand-color");
randomColorButton.addEventListener("click", addRandomColorListeners)

function reset(e) {
   let container = document.getElementById("container");
   while (container.firstChild) {
       container.firstChild.remove();
   }
   createGrid();
   addListeners();
}

function addListeners() {
    const gridContainer = document.getElementById('container');
    const grid = gridContainer.querySelectorAll('div');
    grid.forEach((div) => {
        div.addEventListener("mouseover", color)
    });
}

function addRandomColorListeners() {
    const gridContainer = document.getElementById('container');
    const grid = gridContainer.querySelectorAll('div');
    grid.forEach((div) => {
        div.addEventListener("mouseover", randomColor)
    });
}

function color(e) {
    e.target.style.background = 'black';
}

function randomColor(e) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    e.target.style.background = `rgba(${r},${g},${b},1)`
}

createGrid();
addListeners();



