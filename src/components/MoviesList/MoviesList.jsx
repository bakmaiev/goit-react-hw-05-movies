import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendsMovies } from 'services';

const MoviesList = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

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
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title ?? name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;
