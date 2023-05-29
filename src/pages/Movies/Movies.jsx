import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services';
import {
  StyledMoviesItem,
  StyledMoviesList,
  StyledMoviesWrapper,
} from './StyledMovies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const location = useLocation();
  console.log(location);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      const { data } = await getMoviesByQuery(query);
      setMoviesByQuery(data.results);
      console.log(data.results);
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
