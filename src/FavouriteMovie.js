import React from 'react'
import MovieCard from "./MovieCard";



class FavouriteMovie extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive movie-army">
        <div className="ui five column grid">
          <div className="row movie-army-row">
            {
              this.props.movies.map(movie => <MovieCard movie={movie} handleClick={() => this.props.delistMovie(movie)}/>)
            }




            Your Favourite Movies!
          </div>
        </div>
      </div>
    );
  }

};



export default FavouriteMovie
