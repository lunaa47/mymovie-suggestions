import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Movies from './Movies'

const url = 'https://my-json-server.typicode.com/lunaa47/mymoviesapi/movies'
function App() {
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);

  const removeMovie = (id) =>{
    const newMovies= movies.filter((movie)=> movie.id !==id);
    setMovies(newMovies);
  }
  const fetchMovies = async() => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const movies = await response.json();
      setLoading(false);
      setMovies(movies);
    }catch(error){
       setLoading(false);
       console.log(error);
    }
    
  };

useEffect(()=>{
  fetchMovies();
},[]);

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(movies.length===0){
    return <main>
      <div className="title">
        <h2>No movies Left</h2>
        <button onClick={fetchMovies} className="btn">Refresh</button>
      </div>
    </main>
  }
  return <main>
    <Movies movies={movies} removeMovie={removeMovie}/>
  </main>
}

export default App
