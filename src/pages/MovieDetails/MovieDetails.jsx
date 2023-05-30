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
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
