//Write an ES6 function that takes an array of numbers and
// returns an array with each number incremented by 3 using the map method.


const incrementNumbers =(arr)=>arr.map(Element => Element+3);
const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));
// Output: [4, 5, 6, 7, 8]