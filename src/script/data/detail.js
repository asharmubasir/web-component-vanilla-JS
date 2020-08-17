const baseUrl = 'https://api.themoviedb.org/3/movie'
const apiKey = '429906073710e8cd51e02eac25a48caa'

class DetailMovie {

  static getMovie(id) {
    return fetch(`${baseUrl}/${id}?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => {
      return response.json()
    })
    .then(responseJSON => {
      if(responseJSON) {
        return Promise.resolve(responseJSON);
      } else {
        return Promise.reject('Something wrong');
      }
    })
  }

}

export default DetailMovie
