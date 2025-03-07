// Movie List

// Create an array of objects, each containing movieName, rating, and year.
// Write code to filter movies released after 2015 and sort them by rating in descending order.

const movies = [
    {movieName:'movie1',rating: 4, year: 2016},
    {movieName:'movie2',rating: 3, year: 2020},
    {movieName:'movie3',rating: 5, year: 2014},
    {movieName:'movie4',rating: 1, year: 2019},
    {movieName:'movie5',rating: 3, year: 2000}
];

let newMovieList = [];
for (let i = 0; i < movies.length; i++) {
    if (movies[i].year >2015){
        newMovieList.push(movies[i]);
    }
}
console.log(newMovieList);

// movies in the descending order  of rating
