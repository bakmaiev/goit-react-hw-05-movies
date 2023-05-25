import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMoviesDetails } from 'services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMoviesDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [movieId]);

  movie && console.log(movie);

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
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Genres: 'movie.genres'</p>
          </div>
        </main>
      )}
    </>
  );
};

export default MovieDetails;
