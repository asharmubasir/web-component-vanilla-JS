import DataMovies from '../data/movies.js'

var current_page = 1

window.onscroll = function() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    const movieElement = document.querySelector('movie-content')

    const fallbackResult = function(message) {
      movieElement.renderError(message)
    }

    DataMovies.getAllMovies(current_page += 1)
      .then(data => {
        movieElement.movies = data.results
      })
      .catch(fallbackResult)

  }
};
