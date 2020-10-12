
function createGrid() {
    let size = prompt("Enter a grid size: ");
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


const grid = document.querySelectorAll('div');
grid.forEach((div) => {
    div.addEventListener("mouseover", color)
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", reset);

function color(e) {
    e.target.style.background = 'black';
}

function reset(e) {
   let container = document.getElementById("container");
   while (container.firstChild) {
       container.firstChild.remove();
   }
   createGrid();
}

createGrid();