function createGrid(v) {
    for (let i = 0; i < v; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let x = 1; x <= v; x++) {
            let cell = document.createElement('div');
            cell.className = "cell";
            cell.style.height = 750 / v + 'px';
            cell.style.width = 750 / v + 'px';
            row.appendChild(cell);
        }
    document.getElementById('container').appendChild(row);
    }
}
createGrid(100);

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
    grid.forEach((div) => {
        div.style.background = '';
    })
}



