// Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with 
// only the objects that have a score greater than 80.

const filterByScore = arr => arr.filter(e => e.score>80);


const students = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 }
  ];
  
  console.log(filterByScore(students)); 
  // Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]