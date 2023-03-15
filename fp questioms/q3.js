// const students = [
//     { name: "Alice", grades: [90, 95, 92] },
//     { name: "Bob", grades: [80, 85, 87] },
//     { name: "Charlie", grades: [100, 100, 100] },
//     { name: "David", grades: [75, 80, 82] },
//   ];


  // const getSum = (acc,curr) => acc + curr;
  // const getAverageGrade = grades => grades.reduce(getSum,0)/grades.length;
  // const findStudentWithAverageGradeAtLeast90 = (acc, { name, grades }) => (getAverageGrade(grades) >= 90) ? [...acc, { name, averageGrade: getAverageGrade(grades) }] : acc;
  // const getTopperStudents = students => students.reduce(findStudentWithAverageGradeAtLeast90,[]);

  // console.log(getTopperStudents(students))



//const arr = [1,2,3,4];
// const getAvg = num => num.reduce((acc,cur)=>acc+cur,0)/num.length;
// const goodStudent = arr => arr.reduce((acc,curr)=>{
// if(getAvg(curr.grades)>getAvg(acc.grades)){
//   return { name:curr.name,average:getAvg(curr.grades)}
// }
// return acc;
// })


//   console.log(goodStudent(students));

const students = [
  { name: "Alice", grades: [90, 95, 92] },
  { name: "Bob", grades: [80, 85, 87] },
  { name: "Charlie", grades: [100, 100, 100] },
  { name: "David", grades: [75, 80, 82] },
];

const getAvg = num => num.reduce((acc,cur)=>acc+cur,0)/num.length;
const goodStudent = arr => {
  return arr.reduce((acc,curr)=>{
    console.log("its acc",acc);
    console.log("its cur",curr)
    if(getAvg(curr.grades)>getAvg(acc.grades)){
      return { name:curr.name,average:getAvg(curr.grades)}
    }
    return acc;
  });
}

console.log(goodStudent(students));
  
  