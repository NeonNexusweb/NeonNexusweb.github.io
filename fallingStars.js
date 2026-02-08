const canvas = document.querySelector(".falling-bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function spawnStar() {
  stars.push({
    x: Math.random() * canvas.width,
    y: -10,
    r: Math.random() * 2 + 1,
    s: Math.random() * 2 + 1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star, i) => {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.s;
    if (star.y > canvas.height) stars.splice(i,1);
  });
  requestAnimationFrame(animate);
}

setInterval(spawnStar, 100);
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
