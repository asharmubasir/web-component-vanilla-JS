const baseUrl = 'https://api.themoviedb.org/3/movie'
const apiKey = '429906073710e8cd51e02eac25a48caa'

class DataMovies {

  static getAllMovies(page) {
    return fetch(`${baseUrl}/top_rated?api_key=${apiKey}&language=en-US&page=${page}`)
    .then(response => {
      return response.json()
    })
    .then(responseJSON => {
      if(responseJSON.results) {
        return Promise.resolve(responseJSON);
      } else {
        return Promise.reject('Something wrong');
      }
    })
  }

}

export default DataMovies
