import React, { useState, useReducer } from 'react';
import MovieList from './MovieList/MovieList';
import MovieDetails from './MovieDetails/MovieDetails';
import SearchBar from './SearchBar/SearchBar';
import './MoviePlatform.css';

const moviesData = [
  {
    id: 1,
    title: "Joker",
    director: "Todd Phillips",
    year: 2019,
    description: "A mentally troubled comedian turns to a life of crime and chaos in Gotham City.",
    poster: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2",
  },
  {
    id: 2,
    title: "TENET",
    director: "Christopher Nolan",
    year: 2020,
    description: "A secret agent embarks on a dangerous, time-bending mission to prevent the start of World War III.",
    poster: "https://m.media-amazon.com/images/I/71OHH9HaB5S.jpg",
  },
  {
    id: 3,
    title: "The Creator",
    director: "Gareth Edwards",
    year: 2023,
    description: "In a future where AI and humans are at war, a soldier discovers a secret weapon that could change the course of the conflict.",
    poster: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90301/98769/the-creator-original-movie-poster-one-sheet-final-style-buy-now-at-starstills__81077.1697644483.jpg?c=2",
  },
  {
    id: 4,
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
    poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://m.media-amazon.com/images/I/61wrhEawgQL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    description: "Batman sets out to dismantle the remaining criminal organizations in Gotham, but a new villain, the Joker, emerges.",
    poster: "https://rukminim2.flixcart.com/image/850/1000/k8xduvk0/poster/j/m/z/medium-the-dark-knight-poster-decorative-wall-poster-wall-d-cor-original-imafqu8euacqngyh.jpeg?q=20&crop=false",
  },
  {
    id: 7,
    title: "Dune",
    director: "Denis Villeneuve",
    year: 2021,
    description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    poster: "https://m.media-amazon.com/images/I/81ZMkn8HGBL.jpg",
  },
  {
    id: 8,
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    year: 2017,
    description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
  },
];

// reducer برای مدیریت جستجو
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'FILTER_MOVIES':
      return {
        ...state,
        filteredMovies: moviesData.filter(movie =>
          movie.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
      };
    case 'RESET_MOVIES':
      return {
        ...state,
        searchQuery: '',
        filteredMovies: moviesData,
      };
    default:
      return state;
  }
};

export default function MoviePlatform() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [state, dispatch] = useReducer(searchReducer, {
    searchQuery: '',
    filteredMovies: moviesData,
  });

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearch = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
    dispatch({ type: 'FILTER_MOVIES' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_MOVIES' });
  };

  return (
    <div className="app">
      <h1>Movie Platform</h1>
      <div className="container">
        <SearchBar onSearch={handleSearch} onReset={handleReset} />
        {state.filteredMovies.length === 0 ? (
          <div className="no-results">No movies found.</div>
        ) : (
          <>
            <MovieDetails movie={selectedMovie} />
            <MovieList movies={state.filteredMovies} onMovieSelect={handleMovieSelect} />
          </>
        )}
      </div>
    </div>
  );
}
