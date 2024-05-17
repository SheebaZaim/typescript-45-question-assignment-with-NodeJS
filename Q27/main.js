"use strict";
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
let alien_color = "green";
if (alien_color === "green") {
    console.log(" the player just earned 5 points for shooting the alien (version 1 ).");
}
else if (alien_color === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alien_color === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("the player earned 15 points.");
}
// Version 2   
let aliencolor2 = "yellow";
if (aliencolor2 === "yellow") {
    console.log("you shot yellow alien you got 10 points(version 2). ");
}
else if (aliencolor2 === "green") {
    console.log("  You shot green alien you just earned 5 points for shooting the alien");
}
else if (aliencolor2 === "red") {
    console.log("You shot red alien earned earned 15 points ");
}
// version 3
let aliencolor3 = "red";
if (aliencolor3 === "green") {
    console.log(" You shot green alien you just earned 5 points for shooting the alien");
}
else if (aliencolor3 === "red") {
    console.log(" You shot red alien earned earned 15 points(version 3). ");
}
else if (aliencolor3 === "yellow") {
    console.log("you shot yellow alien you got 10 points ");
}
