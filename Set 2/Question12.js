// Write an ES6 function that takes an array of objects containing Bollywood movie
// information (title, director, year, rating) and returns an array with only the movie 
// titles that were made before 1990 and has a rating above 8.0.
//  (Question Level: tough)

const bollywoodMovies = [
    { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
    { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
    { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
    { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
    { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
    { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
    { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
  ];

//   const getBestOldBollywoodMovies = arr => arr.filter(movie => (movie.year<1990 && movie.rating>8.0))
//                                                 .map(movie => (movie.title));

  const getBestOldBollywoodMovies = arr => arr.reduce((onlyname,movie)=>{
    if(movie.year<1990 && movie.rating>8.0){
        onlyname.push(movie.title);
    }
    return onlyname;
  },[])                                          

  const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']