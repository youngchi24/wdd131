// GET THE CURRENT YEAR
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// GET THE LAST MODIFIED DATE
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// STATIC WEATHER VALUES
const temperature = 29;
const windSpeed = 12;


// WIND CHILL CALCULATION FUNCTION
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}


// CHECK IF WIND CHILL CONDITIONS ARE MET
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}


// DISPLAY WEATHER INFORMATION
document.querySelector("#temperature").textContent = temperature;

document.querySelector("#wind-speed").textContent = windSpeed;

document.querySelector("#wind-chill").textContent = windChill;