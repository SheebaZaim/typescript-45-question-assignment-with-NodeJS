"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Task 1 Places array
let placeArr = ["Dubai", "America", "Saudia", "Canada"];
console.log("oringinal order:", placeArr);
//  Task 2 with alphabetical and oringinal array.
console.log("Alphabatical order:", [...placeArr].sort());
//  Task 3: still in original order
console.log("still in original order", placeArr);
// Task4: Reverse Alphabetic order
console.log("reverse order:", [...placeArr].reverse());
// Task 5: still in original order
console.log("still in original order:", placeArr);
// Task 6:original order reverse without copy:
console.log("original order reverse:", placeArr.reverse());
// Task7: reverse back to its original form
console.log("back to original form:", placeArr.reverse());
// Task 8:without copy alphabetical order array
console.log("sorted to alphabetical order:", placeArr.sort());
// Task9: again reverse alphabitcal file or list
console.log("reverse alphabetical order:", placeArr.reverse());
