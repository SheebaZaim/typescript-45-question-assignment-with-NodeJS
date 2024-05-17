// 16. More Guests: You just found a bigger dinner table, so now more space is
//  available. Think of three more guests to invite to dinner.

import { isTemplateSpan } from "typescript";

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guestArr:string[]=["Salam","Ali","Amna","Erum"];
let canNotAttend:string="Amna";
let newGuest="Zeeshan";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest
console.log(guestArr);
// Task1
guestArr.map((item)=> (console.log(`Dear ${item}, I found a bigger dinner table.`)
));
// Task 2
 let guestBegin:string ="Asia";
 guestArr[ guestArr.unshift(guestBegin)];
 console.log(guestArr);
//  Task 3
let guestMiddle:string="Fizza";
let middleIndex = (guestArr.length/2);
guestArr.splice(middleIndex,0,guestMiddle)

console.log(guestArr);
guestArr.push("Arsalan");
console.log(guestArr)
guestArr.map((item)=>(console.log(`Dear ${item},I found a bigger dinning table,you are invited at dinner`)
));
