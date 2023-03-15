//Write an ES6 function that takes an array of strings as input and concatenates them into a single string.


const concatStrings = arr => arr.reduce((newString,string)=> newString+string,"");



console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'