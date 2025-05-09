let movie = [
    {
        movieName: 'Deadpool',
        rating: 4,
        year: 2024,
    },
    {
        movieName: 'Inception',
        rating: 5,
        year: 2010,
    },
    {
        movieName: 'Interstellar',
        rating: 5,
        year: 2014,
    },
    {
        movieName: 'The Dark Knight',
        rating: 5,
        year: 2008,
    },
    {
        movieName: 'Avengers: Endgame',
        rating: 4.5,
        year: 2019,
    },
    {
        movieName: 'Spider-Man: No Way Home',
        rating: 4.7,
        year: 2021,
    }
];

// we need to get the movie which is released after the 2015
console.log("The Movies which launched after the 2015 is ")
movie.forEach(move =>{
    if(move.year>2015){
        console.log("Movie name is "+move.movieName+"year is "+move.year);
    }
})