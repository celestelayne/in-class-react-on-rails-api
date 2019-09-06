import React from "react";

const Movie = ({movie}) => {

  return (
    <div className="column is-one-quarter-desktop is-half-tablet">
      <div className="Movie card">

        <div className="card-image">
          <figure className="image is-3by4">
            <img src={movie.poster} alt={movie.title} />
          </figure>
        </div>



      </div>
    </div>
  )

}

export default Movie;
