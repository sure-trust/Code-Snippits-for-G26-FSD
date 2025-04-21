// Movie List
const movies = [
    { movieName: "Inception", rating: 8.8, year: 2010 },
    { movieName: "The Matrix", rating: 8.7, year: 1999 },
    { movieName: "Interstellar", rating: 8.6, year: 2014 },
    { movieName: "Pulp Fiction", rating: 8.9, year: 1994 }
];

// Sort by rating
const byRating = [...movies].sort((a, b) => b.rating - a.rating);

// Filter movies after 2000
const recentMovies = movies.filter(movie => movie.year > 2000);

// Find highest rated movie
const highestRated = movies.reduce((highest, current) => 
    current.rating > highest.rating ? current : highest
);

console.log("All movies:", movies);
console.log("\nSorted by rating:", byRating);
console.log("\nMovies after 2000:", recentMovies);
console.log("\nHighest rated movie:", highestRated); 