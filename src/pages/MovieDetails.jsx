import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Outlet, Link } from 'react-router-dom';
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
        <>
          <MovieInfo movie={movie} />
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
