function filterAndSortMovies(movies) {
    if (!movies || movies.length === 0) {
      return []; // Handle empty or invalid input
    }
  
    const filteredMovies = movies.filter(movie => movie.year > 2015);
  
    const sortedMovies = filteredMovies.sort((a, b) => b.rating - a.rating);
  
    return sortedMovies;
  }
  
  // Example usage:
  const movieList = [
    { movieName: "Avengers: Endgame", rating: 8.4, year: 2019 },
    { movieName: "Interstellar", rating: 8.6, year: 2014 },
    { movieName: "Parasite", rating: 8.5, year: 2019 },
    { movieName: "La La Land", rating: 8.0, year: 2016 },
    { movieName: "Mad Max: Fury Road", rating: 8.1, year: 2015 },
    { movieName: "Spider-Man: Into the Spider-Verse", rating: 8.4, year: 2018 },
    { movieName: "Arrival", rating: 7.9, year: 2016 },
  ];
  
  const processedMovies = filterAndSortMovies(movieList);
  
  console.log("Movies released after 2015, sorted by rating (descending):");
  if (processedMovies.length > 0) {
    processedMovies.forEach(movie => {
      console.log(`${movie.movieName} (${movie.year}): Rating ${movie.rating}`);
    });
  } else {
      console.log("No movies found that match the criteria.");
  }