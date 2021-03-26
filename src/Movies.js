import React from 'react';
import Movie from './Movie';

const Movies = ({movies, removeMovie}) => {
  return (<section>
    <div className="title">
      <h2>movie suggestions</h2>
      <div className="underline"></div>
      <div>
        {movies.map((movie)=>{
          return <Movie key={movie.id} {...movie} removeMovie={removeMovie}></Movie>
        })}
      </div>
    </div>
  </section>);
};

export default Movies;
