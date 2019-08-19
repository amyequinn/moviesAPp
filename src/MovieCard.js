import React from 'react'


const MovieCard = props => {
  const { movie } = props;


  return (
    <div className="ui column">
      <div
        className="ui card"
        key={movie.id}
        onClick={props.handleClick}>

  <div className="image">
    <img alt="images" src={movie.poster} />
  </div>
  <div className="content">
    <div className="header">
      {movie.title}
    </div>

    <div className="meta text-wrap">
      <small>{movie.genre}</small>
    </div>
  </div>
  <div className="extra content">
    <span>
      <i className="icon film" />
      {movie.plot}
    </span>


  </div>
</div>
</div>



  );

};


export default MovieCard
