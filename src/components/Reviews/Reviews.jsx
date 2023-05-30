import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services';
import { StyledReviewsList } from './StyledReviews';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await getMoviesReviews(movieId);
        setReviews(data.results);
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
      {reviews && reviews.length === 0 && <p>There are no reviews</p>}
      {reviews && reviews.length > 0 && (
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
      )}
    </>
  );
};

export default Reviews;
