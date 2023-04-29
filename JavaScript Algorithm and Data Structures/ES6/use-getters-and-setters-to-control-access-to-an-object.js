// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  //getter
  get temperature() {
   return (5/9) * (this._fahrenheit - 32);
  }
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log("celcius: " + thermos.temperature);

let temp = thermos.temperature; // 24.44 in Celsius
console.log("temp: " + temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
