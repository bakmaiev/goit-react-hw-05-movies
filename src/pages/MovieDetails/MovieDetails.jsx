import MovieInfo from 'components/MovieInfo/MovieInfo';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Outlet, useLocation } from 'react-router-dom';
import { getMoviesDetails } from 'services';
import {
  StyledBackLink,
  StyledBackLinkWrapper,
  StyledDetailsLink,
  StyledDetailsList,
} from './StyledMovieDetails';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await getMoviesDetails(movieId);
        setMovie(data);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };

    getData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {movie && (
        <>
          <StyledBackLinkWrapper>
            <StyledBackLink to={backLinkLocationRef.current}>
              Go back
            </StyledBackLink>
          </StyledBackLinkWrapper>
          <MovieInfo movie={movie} />
          <StyledDetailsList>
            <li>
              <StyledDetailsLink to="cast">Cast</StyledDetailsLink>
            </li>
            <li>
              <StyledDetailsLink to="reviews">Reviews</StyledDetailsLink>
            </li>
          </StyledDetailsList>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
