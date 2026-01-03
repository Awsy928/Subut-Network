const API = "https://api.mcstatus.io/v2/status/java/subutsmp.xyz:20243";

async function load(){
  try{
    const r = await fetch(API);
    const d = await r.json();
    document.getElementById("players").innerText =
      d.players.online + " / " + d.players.max;
  }catch{
    document.getElementById("players").innerText = "Offline";
  }
}

load();
setInterval(load,15000);