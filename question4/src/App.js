import logo from './logo.svg';
import './App.css';
// 4. Create an array of objects representing employees in a company. Each object has the following 
// properties: id, name, department, and salary. Write a React component that takes the array of 
// employees as input and returns an unordered list of employees, where each list item displays the 
// employee's name, department, and salary.

const employees = [
  { id: 1, name: "Yash", department: "software Engineer",salary:20000 },
  { id: 2, name: "Shubham", department:"Senior software", salary:30000 },
  { id: 3, name: "Pramod", department:"Manager" ,salary:50000 },
  { id: 4, name: "karisma", department:"ITSO",salary:70000 }
];

function App() {
  return (
    <div className="App">
    <h1>Employees</h1>
      <ul>
        {employees.map(item => (
          <li key = {item.id}>
            {item.name}:{item.department},{item.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
