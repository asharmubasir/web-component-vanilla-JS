import '../data/detail.js'
import DetailMovie from '../data/detail.js';

const imageUrl = 'https://image.tmdb.org/t/p/original/'

class MovieContent extends HTMLElement {

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this._movies.forEach(movie => {
      this.innerHTML += `
        <div class="box" id="${movie.id}">
          <img src="${imageUrl}${movie.poster_path}">
        </div>
      `
    })
    const boxImages = document.querySelectorAll('.box')
    this.onClickedImages(boxImages)
  }

  onClickedImages(boxImages) {
    var modal = document.getElementById('myModal')
    var span = document.getElementsByClassName('close')[0]

    for(var i=0; i<boxImages.length; i++){
      boxImages[i].addEventListener('click', function(){

        modal.classList.remove('hidden')

        const renderResult = function(result) {
          const [
            imageMovie, 
            titleMovie,
            genreMovie,
            releaseMovie,
            starsMovie, 
            voteCount, 
            textMovie,
          ] = [
            document.getElementById('poster'),
            document.getElementById('title-movie'),
            document.getElementById('genre'),
            document.getElementById('release'),
            document.querySelector('#stars-movie span'),
            document.querySelector('#vote-count em'),
            document.getElementById('desc-movie')
          ]

          const genres = []

          result.genres.map(genre => {
            genres.push(genre.name)
          })

          imageMovie.src          = `${imageUrl}${result.poster_path}`
          titleMovie.innerHTML    = result.title
          genreMovie.innerHTML    = genres.join(', ')
          releaseMovie.innerHTML  = `(${result.release_date.split('-')[0]})`
          starsMovie.innerHTML    = result.vote_average
          voteCount.innerHTML     = `Based on ${result.vote_count} reviews`
          textMovie.innerHTML     = result.overview
        }

        const fallbackResult = function(message) {
          alert(message)
        }

        DetailMovie.getMovie(this.id)
          .then(renderResult)
          .catch(fallbackResult)
        
      })
    }

    span.addEventListener('click', function(){
      modal.classList.add('hidden')
    })

  }

  renderError(message) {
    this.innerHTML = `
    <div class="box">
      <h1> ${message} </h1>
    </div>
    `
  }

}

customElements.define('movie-content', MovieContent)
