import React from 'react';

export default function MovieDetails({ movie }) {
  if (!movie) {
    return <div className="movie-details">Select a movie...</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <div>
        <img src={movie.poster} alt={movie.title} />
        <div>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Description:</strong> {movie.description}</p>
        </div>
      </div>
    </div>
  );
}