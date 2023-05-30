import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendsMovies } from 'services';
import {
  StyledMoviesItem,
  StyledMoviesList,
  StyledWrapper,
} from './StyledMovieList';
import 'react-toastify/dist/ReactToastify.css';

const MoviesList = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getTrendsMovies();
        setMovies(data.results);
      } catch (e) {
        console.log(e.message);
      }
    };

    getData();
  }, []);

  return (
    <>
      <StyledWrapper>
        <h1 className="title">20 MOST POPULAR MOVIES RIGHT NOW</h1>
        <StyledMoviesList>
          {movies ? (
            movies.map(({ id, title, name, poster_path }) => {
              return (
                <StyledMoviesItem key={id}>
                  <Link to={`movies/${id}`} state={{ from: location }}>
                    <div className="card">
                      <img
                        className="img"
                        src={
                          poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : `https://placehold.co/400x600?text=${
                                title ?? name
                              }&font=roboto`
                        }
                        alt={title ?? name}
                      />
                    </div>
                  </Link>
                </StyledMoviesItem>
              );
            })
          ) : (
            <p style={{ textAlign: 'center' }}>
              Something went wrong. Reload the page.
            </p>
          )}
        </StyledMoviesList>
      </StyledWrapper>
    </>
  );
};

export default MoviesList;
