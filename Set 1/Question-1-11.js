// Write an ES6 function that takes an array of objects containing book information (title, author, genre) 
// and returns an array with only the books of "Science Fiction".

// Your ES6 code here

const filterByGenre = (arr,str)=> arr.filter(e => e.genre === str);

const books = [
    {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
    {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
    {title: "1984", author: "George Orwell", genre: "Science Fiction"},
    {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
  ];
  
  const filteredBooks = filterByGenre(books, "Science Fiction");
  console.log(filteredBooks);
  // Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]