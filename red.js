const leaves = document.querySelector('.leaves');

for (let i = 0; i < 35; i++) {
  const leaf = document.createElement('span');
  leaf.innerHTML = '🍁';
  leaf.style.left = Math.random() * 100 + 'vw';
  leaf.style.fontSize = 20 + Math.random() * 30 + 'px';
  leaf.style.animationDuration = 6 + Math.random() * 10 + 's';
  leaves.appendChild(leaf);
}
