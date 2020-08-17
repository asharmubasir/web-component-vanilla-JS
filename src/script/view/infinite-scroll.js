import DataMovies from '../data/movies.js'

var current_page = 1
var nav = document.getElementsByTagName('nav-bar')[0];
var mainNav = document.querySelectorAll('.main-nav a')

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

  if (window.pageYOffset > 290) {
    nav.style.background = "#bba637";
    nav.style.opacity = "0.8";
    mainNav.forEach(atext => {
      atext.style.color = "black";
    })
  }
  else{
    nav.style.background = "white";
    mainNav.forEach(atext => {
      atext.style.color = "#bba637";
    })
  }

};
