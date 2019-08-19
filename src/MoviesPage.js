import React from 'react'
import MovieCollection from "./MovieCollection"
import FavouriteMovie from "./FavouriteMovie"

const moviesUrl = 'http://localhost:3000/movies'

const fetchMovies = () =>
  fetch(moviesUrl)
  .then(resp => resp.json())



class MoviesPage extends React.Component{

  state = {
    movies: [],
    favMovieIDs: []
  }

componentDidMount(){
  fetchMovies()
  .then(movies => this.setState({movies}))
  }

favouriteMovie = movie => {
  if (this.state.favMovieIDs.includes(movie.id)) return;
  this.setState({
  favMovieIDs: [...this.state.favMovieIDs, movie.id]
  })
}

delistMovie = movie => {
  this.setState({
    favMovieIDs: this.state.favMovieIDs.filter(favMovieID => favMovieID !==movie.id)
  })
}


getFavouriteMovies = () =>
  this.state.favMovieIDs.map(favMovieID =>
    this.state.movies.find(movie => movie.id === favMovieID));




  render(){
    return(
    <div>
    <FavouriteMovie movies={this.getFavouriteMovies()} delistMovie={this.delistMovie}/>
    <MovieCollection movies={this.state.movies} favouriteMovie={this.favouriteMovie}/>
    </div>
    )
}
}


export default MoviesPage
