import React, { useEffect,useState } from 'react';
import './App.css';
import SearchIcon from "./searchIcon.png"
import MovieCard from './MovieCard';




const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=eb9a8cc8"

function App() {
const [movies,setMovies] = useState();
const [searchTerm,setSearchTerm] = useState("")

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies("Avengers");
  }, []);
   
 
  return (
    <div className="App ">
    <h1>Movie World</h1>

    <div className="search">
      <input 
      placeholder='Search for movies'
      type="text"
      value={searchTerm}
      onChange={(e) =>setSearchTerm(e.target.value)}
      />
      <img className='search-icon'
      src={SearchIcon}
      alt="sec"
      onClick={() => searchMovies(searchTerm)}
        />
      </div>

   {
    movies?.length > 0
    ? (
              <div className='container'>
                {movies.map((movie) => (
                  <MovieCard movie={movie}
                  />
                ))} 
              </div>
    ) : (
      <div className='empty'>
        <h2>No movies found</h2>
        </div>
    )
   }
    </div>
  );
}

export default App;
