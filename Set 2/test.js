// const num = [1,2,3,4,5,6,4];
// sumofNum = (acc,con) => {console.log(acc,con);
// return acc+con};
// const arrf = arr => arr.reduce(sumofNum,0,5)
// console.log(arrf(num));

// const num = [1,2,3,4,5,6,4];
// //const sumOfOdd = num.reduce((acc,curr)=>(curr%2!==0?acc+curr:acc));
// const sumOfOdd = num.reduce((acc,curr)=>(curr%2!==0?acc+curr:acc),0);
// console.log(sumOfOdd);

// const sumOfPages = (acc,cur) => {console.log(acc,cur.pages);
//     return (acc+cur.pages);}
// const total = (arr)=> arr.reduce(sumOfPages,0);

//  const books = [ { title: 'The Alchemist', author: 'Paulo Coelho', pages: 197 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
//    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 }]

//    console.log(total(books));
const arr = [1,2,3,4,5];
//const sum = arr => arr.reduce((arr,cur)=>arr+cur,0);
//console.log(sum(array));

console.log(arr.reduce((arr,cur)=>arr+cur,0));