const meteor = document.getElementById("meteor");

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// ---------- METEORITE ----------
let y = -100;

function fall() {
  y += 14;
  meteor.style.top = y + "px";

  if (y >= innerHeight / 2) {
    meteor.remove();        // 💥 sparisce
    createButtons();        // ✨ crea i bottoni
    startStars();           // 🌠 stelle
  } else {
    requestAnimationFrame(fall);
  }
}

fall();

// ---------- CREA BOTTONI ----------
function createButtons() {
  const box = document.createElement("div");
  box.className = "buttons";

  box.innerHTML = `
    <button onclick="location.href='about.html'">🔥 Chi siamo</button>
    <button onclick="location.href='giveaway.html'">🎁 Giveaway</button>
    <button onclick="window.open('https://discord.gg/3AYH9ff7Zq','_blank')">🚀 Discord</button>
  `;

  document.body.appendChild(box);
}

// ---------- STELLE ----------
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
