const meteor = document.getElementById('meteor');
const buttons = document.getElementById('buttons');
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// METEORITE
let meteorY = -100;

function meteorFall() {
  if (meteorY < window.innerHeight / 2) {
    meteorY += 12;
    meteor.style.top = meteorY + 'px';
    requestAnimationFrame(meteorFall);
  } else {
    meteor.style.display = 'none';
    buttons.classList.remove('hidden'); // mostra pulsanti
    spawnStars();
  }
}

meteorFall();

// STARS / METEORE IN CADUTA
let stars = [];
function spawnStars() {
  setInterval(() => {
    stars.push({
      x: Math.random() * canvas.width,
      y: -10,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 4 + 2
    });
  }, 100);

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

// NAVIGAZIONE SEZIONI
function openDiscord() {
  window.open("https://discord.gg/3AYH9ff7Zq", "_blank");
}

function showSection(id) {
  document.getElementById('giveaway').classList.add('hidden');
  document.getElementById('about').classList.add('hidden');
  buttons.classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');

  // Contatore fake membri
  if (id === 'about') {
    let count = 0;
    const target = 40;
    const el = document.getElementById('member-count');
    el.textContent = 0;
    const interval = setInterval(() => {
      count++;
      el.textContent = count;
      if (count >= target) clearInterval(interval);
    }, 30);
  }
}

function goBack() {
  document.getElementById('giveaway').classList.add('hidden');
  document.getElementById('about').classList.add('hidden');
  buttons.classList.remove('hidden');
}

// ADJUST CANVAS ON RESIZE
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
