import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services';
import {
  StyledMoviesItem,
  StyledMoviesList,
  StyledMoviesWrapper,
} from './StyledMovies';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await getMoviesByQuery(query);
        setMoviesByQuery(data.results);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    query && getData();
  }, [query]);

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const { value } = form.elements.query;
    setSearchParams(value ? { query: value } : {});
    form.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmitForm} />
      {loading && <Loader />}
      {moviesByQuery && moviesByQuery.length === 0 && query !== '' && (
        <p>We don't have such films. Try to find something else!</p>
      )}
      {moviesByQuery && (
        <StyledMoviesWrapper>
          <StyledMoviesList>
            {moviesByQuery.map(({ id, title, name, poster_path }) => {
              return (
                <StyledMoviesItem key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
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
            })}
          </StyledMoviesList>
        </StyledMoviesWrapper>
      )}
    </>
  );
};

export default Movies;
