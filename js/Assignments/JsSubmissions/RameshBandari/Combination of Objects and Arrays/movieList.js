//Create an array of objects, each containing movieName, rating, and year. Write code to filter movies released after 2015 and sort them by rating in descending order.

let movies = [
    { movieName: "Bahubali", rating: 8, year: 2015 },
    { movieName: "Billa", rating: 7, year: 2009 },
    { movieName: "Kalki", rating: 9, year: 2024 },
    { movieName: "Mirchi", rating: 6, year: 2013 },
    { movieName: "Sahoo", rating: 7, year: 2019 },
    { movieName: "Sye", rating: 8, year: 2004 },
    { movieName: "Vedam", rating: 8, year: 2010 }
];
let filteredMovies = movies.filter(movies => movies.year > 2015);

for (let i = 0; i < filteredMovies.length - 1; i++) {
    for (let j = 0; j < filteredMovies.length - 1 - i; j++) {
        if (filteredMovies[j].rating < filteredMovies[j + 1].rating) {
            let temp = filteredMovies[j];
            filteredMovies[j] = filteredMovies[j + 1];
            filteredMovies[j + 1] = temp;
        }
    }
}
console.log("Movies released after 2015 and sorted by rating in descending order:", filteredMovies);