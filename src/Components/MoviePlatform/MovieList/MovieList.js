import React from 'react';

export default function MovieList({ movies, onMovieSelect }) {
  return (
    <div className="movie-list">
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => onMovieSelect(movie)}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}