//Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];


// const countStrings = arr =>arr.reduce((newArr,curr)=>{
//    {...newArr,[curr]:newArr[curr]}
// },{})


// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }


const countStrings = (strings) =>
  strings.reduce((acc, curr) => ({ ...acc, [curr]: (acc[curr] ?? 0) + 1 }), {});

  console.log(countStrings(fruits));