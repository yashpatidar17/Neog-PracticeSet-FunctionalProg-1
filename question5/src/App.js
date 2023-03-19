import logo from './logo.svg';
import './App.css';
// 5. Create an array of objects representing recipes in a cookbook.
//  Each object has the following properties: id, recipe recipeName, recipe creator recipeName.
//   Write a React component where you can create an array of recipes and return an
//    unordered list, where each list item displays the recipe's
//  recipeName and recipe creator recipeName.

const recipeBook = [
  { id: 1, recipeName: "Pav Bhaji", recipeCreatorName: "mumbai Guy" },
  { id: 2, recipeName: "Thepla", recipeCreatorName:"Gujrati Guy" },
  { id: 3, recipeName: "Momos", recipeCreatorName:"Asian Guy"},
  { id: 4, recipeName: "Daal Bati", recipeCreatorName:"RJ guy" }
];

function App() {
  return (
    <>
      <ul>
      <h1>Recipe Book</h1>
        {recipeBook.map(item=>(
          <li key = { item.id }>
            { item.recipeName}:{item.recipeCreatorName}
          </li>
        ))

        }
      </ul>
    </>
  );
}

export default App;
