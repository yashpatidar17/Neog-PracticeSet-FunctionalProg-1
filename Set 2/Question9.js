// Write an ES6 function that takes an array of objects representing students with properties name and grade.
//  Return the first student object that has a grade of "A".

const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
  ];
  
const findStudentWithGradeA = arr => arr.find(e => e.grade === "A");


  const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA); 
// Output: { name: "Mary", grade: "A" }