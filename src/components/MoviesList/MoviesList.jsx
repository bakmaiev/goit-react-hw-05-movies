import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendsMovies } from 'services';

export const MoviesList = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getTrendsMovies();
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  return (
    <ul>
      {movies &&
        movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title ?? name}</Link>
            </li>
          );
        })}
    </ul>
  );
};
