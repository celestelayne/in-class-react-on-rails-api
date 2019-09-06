import React from 'react';

import Movie from '../Movie/Movie'

const MoviesList = ({movies}) => {
  console.log(movies)

  const movie = movies && movies.map((movie, index) =>
        <Movie key={index} movie={movie} />
  )

  return (
    <div className="MoviesList columns is-multiline">
      { movie }
    </div>
  )
}

export default MoviesList;
