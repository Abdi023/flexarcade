let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width, canvas.height);
//tekenposities
let x = 100;
let y = 100;
let size = 10;
//kleur
ctx.fillStyle = "red";
function update(time){
    //beweging
    x++;
    //teken vierkant
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+size,y);
    ctx.lineTo(x+size,y+size);
    ctx.lineTo(x,y+size);
    ctx.lineTo(x,y);
    ctx.fill();
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);





