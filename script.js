setTimeout(() => {
  document.getElementById("meteor").style.display = "none";
  document.getElementById("menu").classList.remove("hidden");
}, 2000);

function openDiscord() {
  window.open("https://DISCORD-LINK-QUI", "_blank");
}

function showSection(id) {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function goBack() {
  document.getElementById("giveaway").classList.add("hidden");
  document.getElementById("about").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");
}
