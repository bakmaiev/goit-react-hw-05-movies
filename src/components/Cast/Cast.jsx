import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'services';
import { StyledCastItem, StyledCastList } from './StyledCast';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await getMoviesCredits(movieId);
        setCast(data.cast);
        setLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {cast && cast.length === 0 && <p>No information about actors</p>}
      {cast && (
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
      )}
    </>
  );
};

export default Cast;
