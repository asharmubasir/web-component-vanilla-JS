import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import './component/movie-content.js'
import './component/nav-bar.js'
import './view/infinite-scroll.js'

import DataMovies from '../script/data/movies.js'

const main = function() {
  const movieElement = document.querySelector('movie-content')

  const fallbackResult = function(message) {
    movieElement.renderError(message)
  }

  DataMovies.getAllMovies(1)
    .then(data => {
      movieElement.movies = data.results
    })
    .catch(fallbackResult)

}

export default main
