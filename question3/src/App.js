import logo from './logo.svg';
import './App.css';

// 3. Create an array of objects representing books in a library.
//  Each object has the following properties: id, title, author, and rating.
//   Write a React component that takes the array of books as input and returns an unordered 
//   list of books, where each list item displays
//the book's title, author, and rating.
const books = [
  { id: 1, name: "Do Epic Shit", rating: 9,author:"Ankur Warikoo" },
  { id: 2, name: "Deep Work", rating:8, author:"Cal Newport" },
  { id: 3, name: "Ikigai", rating:7 ,author:"Hector garcia" },
  { id: 4, name: "Atomic habit", rating:10 ,author:"James Clear" }
];

function App() {
  return (
    <div className="App">
      <h1>Library</h1>
      <ul>
        {books.map(book=>(
          <li key = {book.id}>
          {book.name}:{book.rating},{book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
