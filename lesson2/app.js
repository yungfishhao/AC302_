console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,10);
ctx.lineTo(110,50);
ctx.moveTo(90,50);
ctx.lineTo(210,10);
ctx.moveTo(190,10);
ctx.lineTo(300,50);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = 'rgb(200,50,10)';
ctx.fillRect(75, 125, 150, 100);
ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);
ctx.clearRect(125, 150, 50, 50);

var c1 = document.getElementById("one");
var ctx1 = c1.getContext('2d');
ctx1.fillStyle = "rgb(0,100,100)";
ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,150,150);

var c2 = document.getElementById("two");
var ctx2 = c2.getContext('2d');
ctx2.fillStyle = "rgb(0,100,100)";
ctx2.fillRect(0,0,300,300);
ctx2.clearRect(20,20,120,120);
ctx2.clearRect(160,20,120,120);
ctx2.clearRect(20,160,120,120);
ctx2.clearRect(160,160,120,120);

var c3 = document.getElementById("three");
var ctx3 = c3.getContext('2d');
ctx3.fillStyle = "rgb(0,100,100)";
ctx3.fillRect(0,0,100,100);
ctx3.fillRect(200,0,100,100);
ctx3.fillRect(0,200,100,100);
ctx3.fillRect(100,100,100,100);
ctx3.fillRect(200,200,100,100);

var c4 = document.getElementById("four");
var ctx4 = c4.getContext('2d');
var pos = 0;
var size = 300;
ctx4.fillStyle = "rgb(0,100,100)";
while(size > 0){
    ctx4.fillRect(pos, pos, size, size);
    pos += 10;
    size -= 20;
    ctx4.clearRect(pos, pos, size, size);
    pos += 10;
    size -= 20;
}