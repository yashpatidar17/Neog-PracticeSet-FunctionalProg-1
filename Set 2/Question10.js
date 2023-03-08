// Write an ES6 function that takes an array of objects representing students with
//  properties name, grade and scholarship. Return the first student object that has a grade of "A"
//  or they are a scholarship student.

const students = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "B", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "A", scholarship: true },
  ];
  
  const findStudent = arr => arr.find(e => (e.grade === "A" && e.scholarship === true));

  const student = findStudent(students);
console.log(student); 
// Output: { name: "Mary", grade: "B", scholarship: true }