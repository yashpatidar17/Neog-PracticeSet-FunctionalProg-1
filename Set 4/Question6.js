// 6. Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = arr => arr.reduce((total,item)=> total.length>item.length ? total:total=item);

console.log(longestString(strings)); 
// Output: 'Haule Haule'