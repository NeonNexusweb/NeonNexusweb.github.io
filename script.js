const meteor = document.getElementById('meteor');
const buttons = document.getElementById('buttons');
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// METEORITE CADUTA
let meteorY = -100;

function meteorFall() {
  if (meteorY < window.innerHeight / 2) {
    meteorY += 12; // velocità caduta
    meteor.style.top = meteorY + 'px';
    requestAnimationFrame(meteorFall);
  } else {
    meteor.style.display = 'none';
    showButtons();
    startStars();
  }
}

function showButtons() {
  buttons.classList.remove('hidden');
}

// STELLE / METEORE CADUTA INFINITA
let stars = [];

function startStars() {
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

meteorFall();

// ADJUST CANVAS ON RESIZE
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
