// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

// let guestArr:string[]=["Salam","Ali","Amna","Erum"];
// let canNotAttend:string="Amna";
// let newGuest="Zeeshan";
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest
// console.log(guestArr);
// Task1
// guestArr.map((item)=> (console.log(`Dear ${item}, I found a bigger dinner table.`)
// ));
// Task 2
//  let guestBegin:string ="Asia";
//  guestArr[ guestArr.unshift(guestBegin)];
//  console.log(guestArr);
// //  Task 3
// let guestMiddle:string="Fizza";
// let middleIndex = (guestArr.length/2);
// guestArr.splice(middleIndex,0,guestMiddle)
// console.log(guestArr);
// guestArr.push("Arsalan");
// console.log(guestArr)
// guestArr.map((item)=>(console.log(`Dear ${item},I found a bigger dinning table,you are invited at dinner`)
// ));
// Q17 Task 1
let guestArr:string[]=["Salam","Ali","Amna","Erum","Asma"];

console.log( "sorry  big dinner table is not arrange at Time, so I can invite two person.");
//  while loop use until 2 guest remain from array.Task 2
while(guestArr.length>2) {

    let removedGuest=guestArr.pop()
console.log(`Dear ${removedGuest}, you are not invited to dinner`)
}
//  Remaining two people invitation. Task 3
 guestArr=["Salam","Ali"];
 guestArr.map((items)=>console.log(` Luckily Mr ${items} you are invited to dinner.`));
//  No one invited for dinner.Task 4

    guestArr.pop()
    guestArr.pop()
    console.log ("empty guest list",guestArr);