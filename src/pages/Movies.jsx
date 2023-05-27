import SearchForm from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services';

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
        <div>
          <ul>
            {moviesByQuery.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`${movie.id}`} state={{ from: location }}>
                    {movie.title ?? movie.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Movies;
