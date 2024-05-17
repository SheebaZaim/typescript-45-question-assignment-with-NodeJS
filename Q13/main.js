"use strict";
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.
let vehicles = ["Toyota", "Suzuki", "Hundai", "Meera"];
let message = "I would love to buy red ";
console.log(message + " " + vehicles[0]);
console.log(message + " " + vehicles[1]);
console.log(message + " " + vehicles[2]);
console.log(message + " " + vehicles[3]);
vehicles.map((items) => console.log(`I would like to buy own ${(items)}`));
