const leaves = document.querySelector('.leaves');

for (let i = 0; i < 40; i++) {
  const leaf = document.createElement('span');
  leaf.innerHTML = '🍁';
  leaf.style.left = Math.random() * 100 + 'vw';
  leaf.style.animationDuration = 5 + Math.random() * 10 + 's';
  leaf.style.fontSize = 15 + Math.random() * 25 + 'px';
  leaves.appendChild(leaf);
}
