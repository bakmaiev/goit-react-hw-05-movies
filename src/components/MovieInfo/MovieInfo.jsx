import React from 'react';
import { StyledInfoWrapper } from './StyledMovieInfo';

const MovieInfo = ({ movie }) => {
  console.log(movie);
  return (
    <StyledInfoWrapper>
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div className="info">
        <h2 className="title">{movie.original_title}</h2>
        <div>
          <span className="subtitle">Overview</span>
          <p>{movie.overview}</p>
        </div>
        <div>
          <span className="subtitle">User Score</span>
          {movie.vote_average > 0 ? (
            <p>{movie.vote_average.toFixed(1)}</p>
          ) : (
            <span>No rated</span>
          )}
        </div>
        <div>
          <span className="subtitle">Genres</span>
          {movie.genres.length > 0 ? (
            <ul>
              {movie.genres.map(genre => {
                return (
                  <li key={genre.id}>
                    <span>{genre.name}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <span>No information</span>
          )}
        </div>
      </div>
    </StyledInfoWrapper>
  );
};

export default MovieInfo;
