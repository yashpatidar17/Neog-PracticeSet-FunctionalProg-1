import logo from './logo.svg';
import './App.css';

// 6. Create an array of objects representing cars in a dealership. Each object has the following
//  properties: id, make, manufacturer, and price. Write a React component where you can create an array of
//   cars and return an unordered list of cars, where each list item displays the car's make, manufacturer,
//    and price.

const Cars = [
  { id: 1, carName: "Nexon", manufacturer: "Tata",price:20000 },
  { id: 2, carName: "XUV 300", manufacturer:"Mahindra", price:30000 },
  { id: 3, carName: "Creta", manufacturer:"Hyundai" ,price:50000 },
  { id: 4, carName: "Fortuner", manufacturer:"Toyota",price:70000 }
];


function App() {
  return (
    <>
     <h1>Car Details</h1>
     <ul>
      {Cars.map(item=>(
        <li key ={item.id}>
          {item.carName}:{item.manufacturer},{item.price}
        </li>
      ))}
     </ul>
    </>
  );
}

export default App;
