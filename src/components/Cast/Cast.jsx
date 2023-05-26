import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'services';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getData = async () => {
      const { data } = await getMoviesCredits(movieId);
      setCast(data.cast);
      console.log(data.cast);
    };
    getData();
  }, [movieId]);
  return (
    cast && (
      <ul>
        {cast.map(person => {
          return (
            <li key={person.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
              <span>{person.name}</span>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Cast;
