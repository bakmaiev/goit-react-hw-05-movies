import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { getMoviesDetails } from 'services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
          <span>
            <Link to={backLinkLocationRef.current}>Back to movies</Link>
          </span>
          <MovieInfo movie={movie} />
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
