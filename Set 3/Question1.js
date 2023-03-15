// Write an ES6 function that takes an array of objects representing cars 
// with properties make, model, and year. 
// Return the first car object that is a Toyota and the year is after 2010.

const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
//const findToyotaCar = arr => arr.find(car => car.make === "Toyota" && car.year>2010);

const findToyotaCar = arr => arr.reduce((findToyota,car)=>{
    if(car.make === "Toyota" && car.year>2010){
        findToyota = car;    
    }
    return findToyota;
},null)

const toyotaCar = findToyotaCar(cars);
console.log(toyotaCar); 