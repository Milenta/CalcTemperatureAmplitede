"use strict";
const temps = [1, 4, 5, -2, 25, "error"];

const findTempAmp = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > maxTemp) {
      maxTemp = currentTemp;
    }
    if (currentTemp < minTemp) {
      minTemp = currentTemp;
    }
  }
  console.log("min " + minTemp + " max " + maxTemp);
  return maxTemp - minTemp;
};

const ampTems = findTempAmp(temps);
console.log(`Temerature amplitude is ${ampTems}`);
