const meteor = document.getElementById("meteor");
const buttons = document.getElementById("buttons");

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// -------- METEORITE --------
let y = -80;
let falling = true;

function meteorFall() {
  if (!falling) return;

  y += 12;
  meteor.style.top = y + "px";

  if (y >= innerHeight / 2) {
    falling = false;
    meteor.remove();
    buttons.style.display = "flex";
    startStars();
  } else {
    requestAnimationFrame(meteorFall);
  }
}

meteorFall();

// -------- STELLE --------
let stars = [];

function startStars() {
  setInterval(() => {
    stars.push({
      x: Math.random() * canvas.width,
      y: -10,
      r: Math.random() * 2 + 1,
      s: Math.random() * 4 + 2
    });
  }, 80);

  animateStars();
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = stars.length - 1; i >= 0; i--) {
    const star = stars[i];
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.s;
    if (star.y > canvas.height) stars.splice(i, 1);
  }

  requestAnimationFrame(animateStars);
}

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
