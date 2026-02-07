const box = document.querySelector(".leaves");

for (let i = 0; i < 30; i++) {
  const s = document.createElement("span");
  s.textContent = "🍁";
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = 6 + Math.random() * 10 + "s";
  box.appendChild(s);
}
