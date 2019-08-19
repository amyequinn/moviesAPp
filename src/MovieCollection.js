import React from 'react'
import MovieCard from './MovieCard'

class MovieCollection extends React.Component{

  render(){
    return(
      <div>
        Collection of Movies
      {
      this.props.movies.map(movie => <MovieCard movie={movie} handleClick={() => this.props.favouriteMovie(movie)} />)
      }



      </div>
    )
  }
}



export default MovieCollection
