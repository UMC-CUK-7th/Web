import React from 'react';
import { MOVIES } from './movies';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="movie-list">
        {MOVIES.results.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="overlay">
              <h2>{movie.title}</h2>
            </div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;