import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMoviesDetails } from 'services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMoviesDetails(movieId);
        setMovie(data);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      }
    };

    getData();
  }, [movieId, error]);

  return (
    <>
      {movie && (
        <main>
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
        </main>
      )}
    </>
  );
};

export default MovieDetails;
