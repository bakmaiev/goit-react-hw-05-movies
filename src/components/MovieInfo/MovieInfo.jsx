import React from 'react';

const MovieInfo = ({ movie }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div>
        <h2>{movie.original_title}</h2>
        <div>
          <span>Overview</span>
          <p>{movie.overview}</p>
        </div>
        <div>
          <span>User Score</span>
          <p>{movie.vote_average}</p>
        </div>
        <div>
          <span>Genres</span>
          <ul>
            {movie.genres.map(genre => {
              return (
                <li key={genre.id}>
                  <span>{genre.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
