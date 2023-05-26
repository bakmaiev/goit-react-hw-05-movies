import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getData = async () => {
      const { data } = await getMoviesReviews(movieId);
      setReviews(data.results);
      console.log(data.results);
    };
    getData();
  }, [movieId]);
  return (
    reviews && (
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <b>{review.author}</b>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default Reviews;
