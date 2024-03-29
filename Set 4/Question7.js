// Write an ES6 function that takes an array of objects with name and age property, and
//  returns the name of the oldest person.

const people = [
    {name: 'Jeena', age: 25}, 
    {name: 'Priya', age: 300}, 
    {name: 'Naina', age: 45},
]

const oldestPersonName = arr =>arr.reduce((oldest,person) => oldest.age>person.age ? oldest:person).name;

console.log(oldestPersonName(people)); 
// Output: 'Naina'