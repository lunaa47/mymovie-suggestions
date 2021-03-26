import React, { useState } from 'react';

const Movie = ({id,title,year,image,description,link,removeMovie}) => {
  const [readMore,setReadMore] = useState(false);
  return (<article className='single-movie'>
    <img src={image} alt={title}/>
    <footer>
      <div className="movie-info">
        <h4>{title} </h4>
        <h4 className="movie-price">{year}</h4>
      </div>
      <p>{readMore?description:`${description.substring(0,200)}...`}
      <button onClick={()=>setReadMore(!readMore)}>{readMore?'show less':'read more'}</button></p>
      <button className="delete-btn" onClick={() => 
      removeMovie(id)}>Not Interested</button>
      <a href={link} target="_blank"><button className="watch-btn">Watch on Netflix</button></a>
    </footer>
  </article>);
};

export default Movie;
