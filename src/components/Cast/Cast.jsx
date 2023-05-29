import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'services';
import { StyledCastItem, StyledCastList } from './StyledCast';

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
      <StyledCastList>
        {cast.map(person => {
          return (
            <StyledCastItem key={person.id}>
              <img
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                    : `https://placehold.co/400x600?text=${person.name}&font=roboto`
                }
                alt={person.name}
              />
              <span>{person.name}</span>
            </StyledCastItem>
          );
        })}
      </StyledCastList>
    )
  );
};

export default Cast;
