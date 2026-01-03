let players = 0;

setInterval(() => {
  players = Math.floor(Math.random() * 80) + 1;
  const el = document.getElementById("players");
  if (el) el.innerText = players + " / 256";
}, 5000);

function buy(){
  window.open("https://discord.gg/subut", "_blank");
}

function support(){
  window.open("https://discord.gg/subut", "_blank");
}