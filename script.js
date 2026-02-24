const btn = document.getElementById("connectBtn");
const indicator = document.getElementById("indicator");
const statusTitle = document.getElementById("statusTitle");
const statusSub = document.getElementById("statusSub");
const circle = document.querySelector(".circle");
const progressText = document.getElementById("progressText");
const ipText = document.getElementById("ipText");
const pingText = document.getElementById("pingText");
const locationSelect = document.getElementById("locationSelect");
const locationText = document.getElementById("locationText");
const loveScreen = document.getElementById("loveScreen");
const app = document.getElementById("app");

btn.addEventListener("click", () => {

  btn.disabled = true;
  statusTitle.textContent = "Идёт подключение...";
  statusSub.textContent = "Устанавливаем соединение с сервером";
  indicator.style.background = "orange";

  locationText.textContent = locationSelect.value;

  let progress = 0;

  const interval = setInterval(() => {

    progress++;
    progressText.textContent = progress + "%";

    circle.style.background =
      `conic-gradient(#22c55e ${progress * 3.6}deg, #1f2937 0deg)`;

    ipText.textContent = randomIP();
    pingText.textContent = Math.floor(Math.random() * 30 + 10) + " ms";

    if (progress >= 100) {
      clearInterval(interval);

      statusTitle.textContent = "Подключено";
      statusSub.textContent = "Соединение стабильно";
      indicator.style.background = "#22c55e";

      setTimeout(() => {
        app.style.display = "none";
        loveScreen.classList.remove("hidden");
      }, 1500);
    }

  }, 30);

});

function randomIP() {
  return `${r()}.${r()}.${r()}.${r()}`;
}

function r() {
  return Math.floor(Math.random() * 255);
}
