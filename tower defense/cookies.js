const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];
const selectedDefender = 1;
let gameOver = false;
let frame = 0;
let score = 0;
const winningScore = 20;

let enemiesInterval = 1000;
const defenderCost = 100;
let numberOfResources = defenderCost * 1.5;


const projectiles = [];
const defenders = [];
const icePeashooters = [];
const iceProjectiles = [];
const enemies = [];
const enemyPositions = [];
const resources = [];

const mouse = {
    x: undefined,
    y: undefined,
    width: 0.00001,
    height: 0.00001,
}
let canvasPosition = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top;
})

/*********************************************************************************/

// game board
const controlsBar = {
    width: canvas.width,
    height: cellSize,
}
class Cell {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw(){
        ctx.fillStyle = 'black';
        if (collision(this, mouse)){
            ctx.lineWidth = 3;
            ctx.strokeRect(this.x + 3, this.y + 3, this.width - 6, this.height - 6);
        }
    }
}
function handleGamegrid(){
    for (let i = 0; i < gameGrid.length; i++){
        gameGrid[i].draw();
    }
}

/*********************************************************************************/

// Projectiles
class Projectile {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.speed = 90;
        this.power = 10;
    }


    update(){
        this.x++;
    }
    draw(){
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fill();
    }
}

class iceProjectile extends Projectile {
    constructor(x, y) {
       super(x,y);

        this.speed = 85;
        this.power = 25;
    }
    update(){
        this.x++;
    }
    draw(){
        ctx.fillStyle = 'lightblue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fill();
    }
}
function handleProjectiles(){
    for (let i = 0; i < projectiles.length; i++){
        projectiles[i].update();
        projectiles[i].draw();
        for (let y = 0; y < enemies.length; y++){
            if (enemies[y] && projectiles[i] && collision(projectiles[i], enemies[y])){
                enemies[y].health -= projectiles[i].power;

                projectiles.splice(i, 1);
                i--;

            }
        };
        if (projectiles[i] && projectiles[i].x > canvas.width - cellSize){
            projectiles.splice(i, 1);
            i--;
        }
    }
}

function handleIceProjectiles(){
    for (let i = 0; i < iceProjectiles.length; i++){
        iceProjectiles[i].update();
        iceProjectiles[i].draw();
        for (let y = 0; y < enemies.length; y++){
            if (enemies[y] &&  iceProjectiles[i] && collision( iceProjectiles[i], enemies[y])){
                enemies[y].health -=  iceProjectiles[i].power;

                iceProjectiles.splice(i, 1);
                i--;

            }
        };
        if ( iceProjectiles[i] &&  iceProjectiles[i].x > canvas.width - cellSize){
            iceProjectiles.splice(i, 1);
            i--;
        }
    }
}
/*********************************************************************************/

// Defenders

class Defender {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = cellSize - cellGap * 2;
        this.height = cellSize - cellGap * 2;
        this.shooting = false;
        this.projectiles = [];
        this.timer = 0;
        this.shooting = false;
        this.health = 100;
    }



    draw(){
        const ramen = new Image()
        ramen.src = "peashooter.JPG";
        ctx.drawImage(ramen, this.x, this.y);
        console.log("hi");
    }





    update(){
        if (this.shooting){
            this.timer++;
            if (this.timer % 90 === 0){
                projectiles.push(new Projectile(this.x + 70, this.y + cellSize / 2));
            }
        }

    }
}

class icePeashooter extends Defender {
    constructor(x, y){
        super(x,y);
        this.health = 200;
    }



    draw(){
        const ice = new Image()
        ice.src = "icepea.JPG";
        ctx.drawImage(ice, this.x, this.y);
    }





    update(){
        if (this.shooting){
            this.timer++;
            if (this.timer % 90 === 0){
                iceProjectiles.push(new iceProjectile(this.x + 70, this.y + cellSize / 2));
            }
        }

    }
}
canvas.addEventListener('click', function(e){
    const gridPositionX = (e.x - canvasPosition.left) - ((e.x - canvasPosition.left)%cellSize) + cellGap;
    const gridPositionY = (e.y - canvasPosition.top)- ((e.y - canvasPosition.top)%cellSize) + cellGap;
    if (gridPositionY < cellSize) return;
    for (let i = 0; i < defenders.length; i++){
        if (defenders[i].x === gridPositionX && defenders[i].y === gridPositionY) return;
    }
    if (numberOfResources >= defenderCost) {
        defenders.push(new Defender(gridPositionX, gridPositionY));
        numberOfResources -= defenderCost;
    }



})

canvas.addEventListener('click', function(e){

    const gridPositionX = (e.x - canvasPosition.left) - ((e.x - canvasPosition.left)%cellSize) + cellGap;
    const gridPositionY = (e.y - canvasPosition.top)- ((e.y - canvasPosition.top)%cellSize) + cellGap;
    if (gridPositionY < cellSize) return;
    for (let i = 0; i < icePeashooters.length; i++){
        if (icePeashooters[i].x === gridPositionX && icePeashooters[i].y === gridPositionY) return;
    }
    if (numberOfResources >= defenderCost + 50) {
        icePeashooters.push(new icePeashooter(gridPositionX, gridPositionY));
        numberOfResources -= defenderCost + 50;
    }

// poop

});

var dblclick = 0;

function dbl (){
    dblclick += 1;
    console.log("double click");
}

// canvas.addEventListener('dblclick', dbl)


function handleDefenders(){
    for (let i = 0; i < defenders.length; i++){


            defenders[i].draw();
            defenders[i].update();

        defenders[i].update();
        if (enemyPositions.indexOf(defenders[i].y) !== -1) {
            defenders[i].shooting = true;
        } else {
            defenders[i].shooting = false;
            defenders[i].timer = 0;
        }
        for (let j = 0; j < enemies.length; j++){
            if (defenders[i] && collision(defenders[i], enemies[j])){
                enemies[j].movement = 0;
                defenders[i].health--;
            }
            if (defenders[i] && defenders[i].health <= 0){
                defenders.splice(i, 1);
                i--;
                enemies[j].movement = enemies[j].speed;
            }
        }

    }
}

function handleIceDefenders(){
    for (let i = 0; i < icePeashooters.length; i++){


        icePeashooters[i].draw();
        icePeashooters[i].update();

        icePeashooters[i].update();
        if (enemyPositions.indexOf(icePeashooters[i].y) !== -1) {
            icePeashooters[i].shooting = true;
        } else {
            icePeashooters[i].shooting = false;
            icePeashooters[i].timer = 0;
        }
        for (let j = 0; j < enemies.length; j++){
            if (icePeashooters[i] && collision(icePeashooters[i], enemies[j])){
                enemies[j].movement = 0;
                icePeashooters[i].health--;
            }
            if (icePeashooters[i] && icePeashooters[i].health <= 0){
                icePeashooters.splice(i, 1);
                i--;
                enemies[j].movement = enemies[j].speed;
            }
        }

    }
}
/*********************************************************************************/

// Enemies

class Enemy {
    constructor(verticalPosition){
        this.x = canvas.width;
        this.y = verticalPosition;
        this.width = cellSize - cellGap * 2;
        this.height = cellSize - cellGap * 2;
        this.speed = Math.random() * 0.5 + 0.3;
        this.movement = this.speed;
        this.health = 100;
    }
    update(){
        this.x -= this.movement;
    }

    drawEnemy() {
        const image = new Image()
        image.src = "blue.JPG";
        ctx.drawImage(image, this.x, this.y);

    }




}


function drawEnemy() {
    const blue = new Image()
    blue.src = "blue.JPG";
    ctx.drawImage(blue, this.x, this.y);

}

function drawEnemyRed() {

   const red = new Image()
    red.src = "red.JPG";
    ctx.drawImage(red, this.x, this.y);

}



let verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
function handleEnemies(){
    for (let i = 0; i < enemies.length; i++){
        enemies[i].update();
        enemies[i].drawEnemy();
        if (enemies[i] && enemies[i].health <= 0){
            const findThisIndex = enemyPositions.indexOf(enemies[i].y);
            enemyPositions.splice(findThisIndex, 1);
            enemies.splice(i, 1);
            numberOfResources += 10;


            i--
            score++;
        }

        if (enemies[i] && enemies[i].health <= 95){
            const red = new Image()
            red.src = "red.JPG";
          const findThisIndex = enemyPositions.indexOf(enemies[i].y);
            const findThisIndex2 = enemyPositions.indexOf(enemies[i].x);

            ctx.drawImage(red, enemies[i].x, enemies[i].y);




        }
        if (enemies[i] && enemies[i].x < 0){
            gameOver = true;
        }
    }
    if (frame % enemiesInterval === 0 && score < winningScore) {
        verticalPosition = Math.floor(Math.random() * 5 + 1) * cellSize + cellGap;
        enemies.push(new Enemy(verticalPosition));
        enemyPositions.push(verticalPosition);
        if (enemiesInterval > 100) enemiesInterval -= 100;
        console.log('enemy added ' + enemiesInterval);
    };
};

/*********************************************************************************/

// Resources

const amounts = [10,15,20];
class Resource {
    constructor(){
        this.x = Math.random() * (canvas.width - cellSize);
        this.y = Math.random() * (canvas.height - cellSize * 2) + cellSize
        this.width = cellSize / 2;
        this.height = cellSize / 2;
        this.amount = amounts[Math.floor(Math.random() * amounts.length)];
    }
    update(){
        if (collision(this, mouse)){
            ctx.lineWidth = 3;
            ctx.strokeRect(this.x + 3, this.y + 3, this.width - 6, this.height - 6);
        }
    }
    draw(){
        const bone = new Image()
        bone.src = "bonemeal.JPG";
        ctx.drawImage(bone, this.x, this.y);
    }
}
function handleResources(){
    for (let i = 0; i < resources.length; i++){
        resources[i].update();
        resources[i].draw();
        if (resources[i] && collision(resources[i], mouse)){
            numberOfResources += resources[i].amount;
            resources.splice(i, 1);
        }
    }
};

let addResources = setInterval(function(){
    if (score <= winningScore) resources.push(new Resource());
}, 2500);

/*********************************************************************************/

function init(){
    for (let y = cellSize; y < canvas.height; y += cellSize){
        for (let x = 0; x < canvas.width; x += cellSize){
            gameGrid.push(new Cell(x, y));
        }
    }
}
init();
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, controlsBar.width, controlsBar.height);
    handleGamegrid();
    handleResources();
    handleEnemies();
    handleDefenders();
    handleProjectiles();
    handleGameStatus();
    frame++;
    console.log(frame);
    if (!gameOver) requestAnimationFrame(animate);
}
animate();

function handleGameStatus(){
    ctx.fillStyle = 'white';
    ctx.font = '30px milky_coffeeregular';
    ctx.fillText('Gems: ' + score, 10, 35);
    ctx.fillText('Bonemeal: ' + numberOfResources, 10, 85);
    if (gameOver){
        ctx.fillStyle = 'black';
        ctx.font = '45px Helvetica';
        ctx.fillText('THE CREEPERS ATE YOUR BRAINS!!!', 50, 390);
    }
    if (score >= winningScore && enemies.length == 0){
        ctx.fillStyle = 'black';
        ctx.font = '60px Helvetica';
        ctx.fillText('YOU WIN with ' + score + ' points!', 130, 370);
    }
}

// utilities
function collision(first, second){
    if( !(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y)){
        return true;
    };
}
window.addEventListener('resize', function(){
    canvasPosition = canvas.getBoundingClientRect();
})