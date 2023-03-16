//import logo from './logo.svg';
import './App.css';
// 1. Create an array of objects representing movies in your watchlist. Each object has the following
//  properties: id, title and director. Write a React component that takes the array of movies as
//   input and returns an unordered list of movies, where each list item displays the 
//   movie's title and director.
const movies = [
  { id: 1, title: "Dunkrik", director: "Christopher Nolan" },
  { id: 2, title: "Tenet", director: "Christopher Nolan" },
  { id: 3, title: "1917", director: "Sam Mendes" },
  { id: 4, title: "Swades", director: "Ashutosh Gowariker" }
];

function App() {
  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title}: {movie.director}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
