// Write an ES6 function that takes an array of objects with the properties name and age, and returns an array 
// with only the objects that have an age greater than 30.


const filterByAge = arr => arr.filter(e => e.age>30)


const people = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 }
  ];
  
  console.log(filterByAge(people)); 
  // Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]