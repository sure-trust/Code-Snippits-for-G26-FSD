let movies = [
    { movieName: "govinda", rating: 8.8, year: 2010 },
    { movieName: "amaran", rating: 8.6, year: 2014 },
    { movieName: "Druva", rating: 8.2, year: 2021 },
    { movieName: "lilly", rating: 8.3, year: 2021 },
    { movieName: "seeta ramam", rating: 8.9, year: 2023 }
];
console.log("movies list is",movies)
// Filter movies released after 2015 and sort by rating in descending order
let filteredMovies = movies.filter(movie => movie.year > 2015).sort((a, b) => b.rating - a.rating);

console.log("Filtered and Sorted Movies:", filteredMovies);