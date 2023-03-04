// Write an ES6 function that takes an array of objects representing cities
//  and returns an array of their names using the map method.

// const nameFun = (arr) => {
//     const [{name},{name2},{name3}] = arr
//     return name;
// }

 const getCityNames =(arr)=>(arr.map(e => e.name));

const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 }
  ];
  
  console.log(getCityNames(cities)); 
//  Output: ["New York", "Los Angeles", "Bangalore"]
//   console.log(nameFun(cities));