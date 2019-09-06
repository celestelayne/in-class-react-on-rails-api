import React from "react";

const Movie = ({movie}) => {

  return (
    <div className="Movie card">

      <div className="card-content">

        <div className="media-content">
          <p className="title is-4">{movie.title}</p>
          <p className="subtitle is-6">{movie.year}</p>
          <p className="subtitle is-6">{movie.director}</p>
          <p className="subtitle is-6">{movie.plot}</p>
        </div>
      </div>

    </div>
  )

}

export default Movie;
