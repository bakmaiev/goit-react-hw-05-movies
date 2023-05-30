import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services';
import { StyledReviewsList } from './StyledReviews';

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
  return reviews && reviews.length > 0 ? (
    <StyledReviewsList>
      {reviews.map(review => {
        return (
          <li className="item" key={review.id}>
            <b>{review.author}</b>
            <p>{review.content}</p>
          </li>
        );
      })}
    </StyledReviewsList>
  ) : (
    <span>No reviews</span>
  );
};

export default Reviews;
