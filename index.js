// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelcius(fahren) {
  let celcius = (fahren - 32) * (5/9);
  return Math.round(celcius);  
};

/**
function convertToFahrenheit(celc) {
let celc = (fahren - 32) * 5/9;
returns (fahren - 32) * 5/9;
}

console.log(convertToCelcius);
console.log(convertToFahrenheit);
*/

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  let tempFeeling = "";
  if (fahren < 32) {
    tempFeeling = "very cold";
  } else if (fahren < 64) {
    tempFeeling = "cold";
  } else if (fahren < 86) {
    tempFeeling = "warm";
  } else if (fahren < 100) {
    tempFeeling = "hot";
  }
}
//console.log("It feels very cold");
//} else if (faren == 32)
//console.log("Let's check what the weather's like!");

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
let randomTemperature = Math.random() * limit;
return Math.round(randomTemperature);
}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
