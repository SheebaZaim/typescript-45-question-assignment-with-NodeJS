"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
function show_magician(magician) {
    magician.map((items) => console.log(`${items}`));
}
let magician_names = ["Tahir", "Ali", "Huzaifa"];
show_magician(magician_names);
function make_great(magician) {
    magician.map((items) => console.log(`The great ${items}`));
}
make_great(magician_names);
