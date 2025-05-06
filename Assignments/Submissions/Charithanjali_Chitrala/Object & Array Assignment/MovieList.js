// START
// DECLARE movies as an array of objects with movieName, rating, and year
// SET filteredMovies to an empty array
// FOR each movie in movies:
//     IF movie.year > 2015 THEN
//         ADD movie to filteredMovies
//     ENDIF
// ENDFOR
// SORT filteredMovies in descending order based on rating
// PRINT filteredMovies
// END




let movies = [
    { movieName: "Salaar", rating: 8.8, year: 2010 },
    { movieName: "Mirchi", rating: 8.6, year: 2014 },
    { movieName: "Bahubali", rating: 8.4, year: 2019 },
    { movieName: "Kalki", rating: 8.5, year: 2019 },
    { movieName: "Munna", rating: 8.0, year: 2021 }
];
let filteredMovies = movies.filter(movie => movie.year > 2015);
filteredMovies.sort((a, b) => b.rating - a.rating);
console.log(filteredMovies);
