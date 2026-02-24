const btn = document.getElementById("connectBtn");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");
const statusDot = document.getElementById("statusDot");
const locationSelect = document.getElementById("locationSelect");
const locationText = document.getElementById("locationText");
const ipText = document.getElementById("ipText");
const pingText = document.getElementById("pingText");
const loveScreen = document.getElementById("loveScreen");
const app = document.getElementById("app");

btn.addEventListener("click", () => {

  btn.disabled = true;
  statusText.textContent = "Connecting...";
  statusDot.style.background = "orange";

  locationText.textContent = locationSelect.value;

  let progress = 0;

  const interval = setInterval(() => {
    progress += 2;
    progressBar.style.width = progress + "%";

    ipText.textContent = generateIP();
    pingText.textContent = Math.floor(Math.random() * 40 + 10) + " ms";

    if (progress >= 100) {
      clearInterval(interval);

      statusText.textContent = "Connected";
      statusDot.style.background = "#22c55e";

      setTimeout(() => {
        app.style.display = "none";
        loveScreen.classList.remove("hidden");
      }, 1200);
    }

  }, 50);

});

function generateIP() {
  return `${rand()}.${rand()}.${rand()}.${rand()}`;
}

function rand() {
  return Math.floor(Math.random() * 255);
}