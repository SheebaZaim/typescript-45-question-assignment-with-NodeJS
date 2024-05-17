"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let ali = "ali";
let uppercaseAli = "ALI";
let three = 3;
let five = 5;
let thirty = 30;
let twenty = 20;
let fruits = ["Apple", "Banana", "Mango"];
console.log('\nis ali equal to "ali"?');
console.log('ali == "ali"');
console.log('\nIs ali not equal to"ali"');
console.log('ali!="ali"');
console.log("\nis ALI is equal to ali after converting to lowerase");
console.log(uppercaseAli.toLowerCase() == ali);
console.log("\nis ALI is  not equal to ali after converting to lowerase");
console.log(uppercaseAli.toLowerCase() != ali);
console.log("\nis three is equal to 3");
console.log(three == 3);
console.log("\nIs three is  equal to 5");
console.log("three== to 5");
console.log("\nIs three is greater than five");
console.log(3 > 5),
    console.log("\nIs three is less than 5");
console.log(3 < 5);
console.log("\nIs three is less thanan equal to five");
console.log(3 <= 5);
console.log("\nIs three is greater than and equal to five");
console.log(3 <= 5);
console.log("\nis three is not equal to 30 and five is not greater than thirty ");
console.log(three != 30 && five < 30);
console.log("\nis three is  equal to thirty and five is less than 3");
console.log(three == 30 && five < 3);
console.log("\n Is twenty is  equal to 20 OR thirty is less than 20");
console.log(20 == 20 || 30 < 20);
console.log("\nis 5 is greater than twenty OR three is not equal to thirty");
console.log(5 > 20 || three != 30);
console.log("\nIs Banana is present in our fruit array"),
    console.log(fruits.includes("Banana"));
console.log("\n is Banana is not present in our fruit array");
console.log(!fruits.includes("Banana"));
