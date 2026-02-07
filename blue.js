const c = document.getElementById("bg");
const ctx = c.getContext("2d");

function resize() {
  c.width = innerWidth;
  c.height = innerHeight;
}
resize();
addEventListener("resize", resize);

let lines = Array.from({length: 100}, () => ({
  x: Math.random() * c.width,
  y: Math.random() * c.height,
  speed: 2 + Math.random() * 3,
  len: 20 + Math.random() * 40
}));

function draw() {
  ctx.clearRect(0,0,c.width,c.height);
  ctx.strokeStyle = "rgba(0,200,255,0.7)";
  lines.forEach(l => {
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(l.x, l.y + l.len);
    ctx.stroke();
    l.y += l.speed;
    if (l.y > c.height) l.y = -50;
  });
  requestAnimationFrame(draw);
}
draw();
