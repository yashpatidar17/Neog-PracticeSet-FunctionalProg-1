// Write an ES6 function that takes an array of objects representing products and returns an array with 
// the product names in all lower case letters using the map method.


const getProductNamesInLowerCase = (arr) => (arr.map(e => e.name.toLowerCase()))

const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 }
  ];
  console.log(getProductNamesInLowerCase(products));
  // Output: ["lip balm", "perfume", "socks"]