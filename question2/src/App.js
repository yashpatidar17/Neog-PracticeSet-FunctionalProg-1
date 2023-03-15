import logo from './logo.svg';
import './App.css';

// 2. Create an array of objects representing products in an online store.
//  Each object has the following properties: id, name, price, and category.
//   Write a React component that takes the array of products as input and returns an unordered list 
//   of products, where each list item displays the product's name, price, and category.

const products = [
  { id: 1, name: "Toothpaste", price: 100,category:"Personal Hygiene" },
  { id: 2, name: "Chips", price:20, category:"Food" },
  { id: 3, name: "Laptop", price:50000 ,category:"Electronics" },
  { id: 4, name: "Atomic habit", price:250 ,category:"Book" }
];
function App() {
  return (
    <div className="App">
    <h1>Online Products</h1>
      <ul>
        {products.map(items =>(
          <li key={items.id}>
            {items.name}:{items.price},{items.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
