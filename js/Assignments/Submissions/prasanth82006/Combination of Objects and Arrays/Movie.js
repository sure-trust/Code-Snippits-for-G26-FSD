<<<<<<< HEAD

let movies=[
     { movieName: "RRR", rating: 8.2, year: 2016 },
    { movieName: "ABCD", rating: 7.5, year: 2014 },
    { movieName: "DARGON", rating: 9.0, year: 2018 },
    { movieName: "KALKI", rating: 6.8, year: 2020 }
]
movies=movies.filter(a=>a.year>2015)
movies.sort((a,b)=>b.rating-a.rating)
console.log(movies);
=======

let movies=[
     { movieName: "RRR", rating: 8.2, year: 2016 },
    { movieName: "ABCD", rating: 7.5, year: 2014 },
    { movieName: "DARGON", rating: 9.0, year: 2018 },
    { movieName: "KALKI", rating: 6.8, year: 2020 }
]
movies=movies.filter(a=>a.year>2015)
movies.sort((a,b)=>b.rating-a.rating)
console.log(movies);
>>>>>>> upstream/main
