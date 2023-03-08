// Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.
const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]

const studentNames = studentName.filter(e=>e[0]==='A');


console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]