const movies = [
    { movieName: "Bahubali", rating: 9.5, year: 2015 },
    { movieName: "Avengers", rating: 8.4, year: 2019 },
    { movieName: "Parasite", rating: 8.6, year: 2019 },
    { movieName: "Spider-Man", rating: 8.3, year: 2021 }
];
console.log("Movies list :",movies);
console.log("");
const recentMovies = movies
    .filter(movie => movie.year > 2015)
    .sort((a, b) => b.rating - a.rating);

console.log("Movies after 2015 sorted by rating:", recentMovies);
