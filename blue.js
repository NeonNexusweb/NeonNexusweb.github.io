const canvas = document.getElementById("blueCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = Array.from({length: 120}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  speed: 2 + Math.random() * 4,
  length: 10 + Math.random() * 40
}));

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "rgba(0,255,255,0.7)";
  lines.forEach(l => {
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(l.x, l.y + l.length);
    ctx.stroke();
    l.y += l.speed;
    if (l.y > canvas.height) l.y = -50;
  });
  requestAnimationFrame(draw);
}

draw();
