const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = 900;
canvas.height = 600;

const cellSize = 100;
const cellGap = 3;
const gameGrid = [];

const mouse = {}

const controlsBar = {
    width: canvas.width,
    height : cellSize,
}

class Cell {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw(){
       ctx.strokeStyle = 'black';
       ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}
function createGrid(){
    for (let y = cellSize; y < canvas.height; y += cellSize){
      for (let x = 0; x < canvas.width; x += cellSize){
          gameGrid.push(new Cell(x, y));
        }
    }
}
createGrid();
function handleGameGrid(){
        for (let i =0; i < gameGrid.length; i++){
            gameGrid[i].draw();
        }
}

function animate(){
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,controlsBar.width, controlsBar.height);
    handleGameGrid();
    requestAnimationFrame(animate);
}
animate();
