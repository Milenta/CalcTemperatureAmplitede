"use strict";
const temps1 = [1, 4, 5, -8, 25, "error"];
const temps2 = [11, "error", 4, 5, -6, 25, "error", "error"];

const findTempAmp = function (temps1, temps2) {
  const temps = temps1.concat(temps2);

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

const ampTems = findTempAmp(temps1, temps2);
console.log(`Temerature amplitude is ${ampTems}`);
