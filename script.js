const ip = "subutsmp.xyz";
const port = 20243;

// API لجلب حالة السيرفر وعدد اللاعبين
const apiURL = `https://mcapi.us/server/status?ip=${ip}&port=${port}`;

async function fetchServerStatus() {
  const statusEl = document.getElementById("status");
  const playersEl = document.getElementById("players");

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.online) {
      statusEl.textContent = "Online";
      statusEl.classList.remove("offline");
      statusEl.classList.add("online");
      playersEl.textContent = data.players.now + " لاعب";
    } else {
      statusEl.textContent = "Offline";
      statusEl.classList.remove("online");
      statusEl.classList.add("offline");
      playersEl.textContent = "0";
    }
  } catch (error) {
    statusEl.textContent = "خطأ في الاتصال";
    statusEl.classList.remove("online");
    statusEl.classList.add("offline");
    playersEl.textContent = "0";
    console.error("Error fetching server status:", error);
  }
}

// تحديث الحالة عند تحميل الصفحة
fetchServerStatus();

// تحديث كل 30 ثانية تلقائيًا
setInterval(fetchServerStatus, 30000);