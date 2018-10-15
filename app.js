let movieList = document.getElementById('movieList')
let featureMovie = document.getElementById('featureMovie')

const MOVIES_TITLE = `http://www.omdbapi.com/?s=batman&apikey=${apiKey}`

function createMovieLi(movies) {
  let movieLI = movies.Search.map(function(movie) {
    let movieID = movie.imdbID
    return `
    <li id="${movieID}">
    <div id="movieInfoContainer"
      <h3>${movie.Title}</h3>
      <img class="small-image" src="${movie.Poster}"></img>
      <button class="seeMore" movie_id="${movieID}">see more</button>
    </div>
    </li>`
  })
  movieList.innerHTML = movieLI.join('')

  $(".seeMore").click(function(e) {
    e.preventDefault()
    let movieID = e.target.getAttribute("movie_id")
    var movieElement = $(`#${movieID}`)

    const MOVIES_INFO = `http://www.omdbapi.com/?i=${movieID}&apikey=${apiKey}`

    $.get(MOVIES_INFO, function(data) {
      let = featureMovieItem = `
      <div id="highlightedMovie">
        <img src="${data.Poster}"></img>
        <ul>
        <li><h2>${data.Title}</h2></li>
        <li>${data.Year}</li>
        <li>${data.Rated}</li>
        <li>${data.Released}</li>
        <li>${data.Runtime}</li>
        <li>Directed by: ${data.Director}</li>
        </ul>
      </div>`

      featureMovie.innerHTML = featureMovieItem
    })
  })
}

function performRequestUsingjQueryLibrary() {
  $.get(MOVIES_TITLE, function(data) {
    createMovieLi(data)
  })
}
performRequestUsingjQueryLibrary()
