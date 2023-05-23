import React from 'react';
import { useParams } from 'react-router';

export const MovieDetails = () => {
  const movieId = useParams();
  return <div>Now showing film with id - {movieId} -- MovieDetails</div>;
};
