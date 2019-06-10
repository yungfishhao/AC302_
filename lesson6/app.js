console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var WIDTH = 600;
var HEIGHT = 600;

var x = 300;
var y = 300;
var s = 50;

var mx = 0;
var my = 0;

var circleX;
var circleY;
var circleS = 50;
var circleCollision = false;

var ghostX;
var ghostY;
var ghostS = 50;
var ghostCollision = false;

var gameover = false;

var score = 0;

function drawPacman(){
    var pacman = new Image();
    pacman.src = "pacman.png";
    ctx.drawImage(pacman, x, y, s, s);
}

function drawCircle(){
    var circle = new Image();
    circle.src = "circle.png";
    ctx.drawImage(circle, circleX, circleY, circleS, circleS);
}

function clear(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function init(){
    ghostX = Math.floor(Math.random()*(WIDTH - ghostS));
    ghostY = Math.floor(Math.random()*(HEIGHT - ghostS));
    circleX = Math.floor(Math.random()*(WIDTH - circleS));
    circleY = Math.floor(Math.random()*(HEIGHT - circleS));
    window.onkeydown = keydownControl;
    return setInterval(draw, 10);
}

function keydownControl(e){
    if(e.keyCode == 37){
        mx = -4;
        my = 0;
    } else if (e.keyCode == 38){
        mx = 0;
        my = -4;
    } else if (e.keyCode == 39){
        mx = 4;
        my = 0;
    } else if (e.keyCode == 40){
        mx = 0;
        my = 4;
    }
}

function draw(){
    clear();
    if(gameover != true){
    drawPacman();
    drawCircle();

    drawGhost();
    if (x + mx > WIDTH - s || x + mx < 0){
        mx = -mx;
    } else if (y + my > WIDTH - s || y + my < 0){
        my = -my;
    }

    x += mx;
    y += my;

    collisionCheck();
    collisionHandle();
    followPacman();
    } else {
        ctx.font = "40px Impact";
        ctx.fillText("GAME OVER", 200, 300);
    }
    
}

function collisionCheck(){
    if( (x + s >= circleX) && (x <= circleX + circleS) && (y + s >= circleY) && (y <= circleY + circleS)){
        circleCollision = true;
    } else {
        circleCollision = false;
    }
    if( (x + s >= ghostX) && (x <= ghostX + ghostS) && (y + s >= ghostY) && (y <= ghostY + ghostS)){
        ghostCollision = true;
    } else {
        ghostCollision = false;
    }
}

function collisionHandle(){
    if (circleCollision){
        circleX = Math.floor(Math.random() * (WIDTH - circleS));
        circleY = Math.floor(Math.random() * (WIDTH - circleS));
        score += 1;
        document.getElementById("score").innerHTML = score;
    }
    if(ghostCollision){
        gameover = true;
    }
}

function drawGhost(){
    var ghost = new Image();
    ghost.src = "ghost.png";
    ctx.drawImage(ghost, ghostX, ghostY, ghostS, ghostS);
}

function followPacman(){
    if(ghostX < x){
        ghostX += 1;
    }
    if(ghostX > x){
        ghostX -= 1;
    }
    if(ghostY < y){
        ghostY += 1;
    }
    if(ghostY > y){
        ghostY -= 1;
    }
}

init();