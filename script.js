const meteorContainer = document.getElementById("meteor-container");
const meteor = document.getElementById("meteor");
const buttons = document.createElement("div");
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let meteorY = -100;
let falling = true;

// METEORITE + TESTO NEON
function meteorFall() {
  if (!falling) return;
  meteorY += 14;
  meteorContainer.style.top = meteorY + "px";

  if (meteorY >= innerHeight / 2) {
    falling = false;
    meteorContainer.remove();
    createButtons();
    startStars();
  } else {
    requestAnimationFrame(meteorFall);
  }
}

meteorFall();

// BOTTONI HOME
function createButtons() {
  buttons.className = "buttons";
  buttons.innerHTML = `
    <button onclick="location.href='about.html'">🔥 Chi siamo</button>
    <button onclick="location.href='giveaway.html'">🎁 Giveaway</button>
    <button onclick="window.open('https://discord.gg/neonnexus','_blank')">🚀 Discord</button>
  `;
  document.body.appendChild(buttons);
}

// STELLE CADENTI HOME
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
    const s = stars[i];
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.s;
    if (s.y > canvas.height) stars.splice(i, 1);
  }
  requestAnimationFrame(animateStars);
}

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
