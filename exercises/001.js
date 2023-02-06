/* 
Exercise 1:

Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
*/

const isEqualto100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;

console.log(isEqualto100(10,50))
console.log(isEqualto100(50, 50))
console.log(isEqualto100(100, 0))

