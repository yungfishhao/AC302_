console.log("test....");

var ctx = document.getElementById('myCanvas').getContext('2d');
var ddd = new Image();
var dry = new Image();
ddd.src = "Dedede.png";
dry.src = "doriyah.png";

ddd.onload = function(){
    ctx.drawImage(ddd, 400, 325, 200, 200);
}
dry.onload = function(){
    ctx.drawImage(dry, 150, 200, 200, 300);
}
ctx.fillStyle = "cyan";
ctx.fillRect(0,0,800,600);
ctx.fillStyle = "sandybrown";
ctx.fillRect(100,500,600,50);
ctx.fillStyle = "sandybrown";
ctx.fillRect(120,300,200,25);
ctx.fillStyle = "sandybrown";
ctx.fillRect(480,300,200,25);
ctx.fillStyle = "sandybrown";
ctx.fillRect(290,150,200,25);

ctx.font = '55px Impact';
ctx.fillStyle = 'ivory';
ctx.fillText('DORIYAH!!', 100,250);