// Footer Year and Last Modified
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;

// Toggle Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
  if (temp <= 50 && windSpeed > 3) {
    return Math.round(
      35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    );
  } else {
    return "N/A";
  }
}

const temp = 30; // Example static temperature
const windSpeed = 10; // Example static wind speed

document.getElementById("temperature").textContent = temp;
document.getElementById("windSpeed").textContent = windSpeed;
document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
