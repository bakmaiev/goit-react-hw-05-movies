import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [value, setValue] = useState('');

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getData = async () => {
      const { data } = await getMoviesByQuery(query);
      setMoviesByQuery(data.results);
      console.log(data.results);
    };
    query && getData();
  }, [query]);

  return (
    <>
      <div>
        <input type="text" onChange={e => setValue(e.target.value.trim())} />
        <button
          onClick={() => {
            setSearchParams(value ? { query: value } : {});
          }}
        >
          Change SP
        </button>
      </div>
      {moviesByQuery && (
        <div>
          <ul>
            {moviesByQuery.map(movie => {
              return (
                <li key={movie.id}>
                  <Link to={`movies/${movie.id}`}>
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
