// METEORITE CON SCIA E STELLE
const meteor = document.getElementById('meteor');
const trail = document.getElementById('trail');
const menu = document.getElementById('menu');
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// METEORITE ANIMATION
let meteorY = -100;
let trailHeight = 0;

function meteorFall() {
  if (meteorY < window.innerHeight / 2) {
    meteorY += 12;
    trailHeight += 12;
    meteor.style.top = meteorY + 'px';
    trail.style.height = trailHeight + 'px';
    requestAnimationFrame(meteorFall);
  } else {
    meteor.style.display = 'none';
    trail.style.display = 'none';
    menu.classList.remove('hidden');
    spawnStars();
  }
}

meteorFall();

// STARS / METEORE
let stars = [];
function spawnStars() {
  setInterval(() => {
    stars.push({
      x: Math.random() * canvas.width,
      y: -10,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 4 + 2
    });
  }, 150);

  animateStars();
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();

    s.y += s.speed;
    if (s.y > canvas.height) stars.splice(i, 1);
  }
  requestAnimationFrame(animateStars);
}

// PULSANTI
function openDiscord() {
  window.open("https://discord.gg/3AYH9ff7Zq", "_blank");
}

function showSection(id) {
  menu.classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

function goBack() {
  document.getElementById('giveaway').classList.add('hidden');
  document.getElementById('about').classList.add('hidden');
  menu.classList.remove('hidden');
}

// ADJUST CANVAS ON RESIZE
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
