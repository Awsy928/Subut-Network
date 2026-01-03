const SERVER_API = "https://api.mcstatus.io/v2/status/java/subutsmp.xyz:20243";

async function loadPlayers(){
  try{
    const res = await fetch(SERVER_API);
    const data = await res.json();

    const online = data.players.online;
    const max = data.players.max;

    document.getElementById("players").innerText =
      online + " / " + max;
  }catch(e){
    document.getElementById("players").innerText = "Offline";
  }
}

loadPlayers();
setInterval(loadPlayers, 15000); // تحديث كل 15 ثانية

function buy(){
  window.open("https://discord.gg/subut","_blank");
}

function support(){
window.open("https://discord.gg/subut","_blank");
}