console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();

var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");
ctx1.beginPath();
ctx1.strokeStyle = "lime";
ctx1.moveTo(150,50);
ctx1.lineTo(225,200);
ctx1.lineTo(75,200);
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "green";
ctx1.fill();

var c2 = document.getElementById("two");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.moveTo(150,50);
ctx2.lineTo(225,150);
ctx2.lineTo(150,250);
ctx2.lineTo(75,150);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "red";
ctx2.fill();

var c3 = document.getElementById("three");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.strokeStyle = "blue";
ctx3.moveTo(0,0);
ctx3.lineTo(300,300);
ctx3.lineTo(300,0);
ctx3.lineTo(0,300);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "blue";
ctx3.fill();