import css from './MovieReviews.module.css'
import { fetchMovieReviews } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const MovieReviews = () => {

  const{movieId} = useParams();
  const[reviews, setReviews] = useState(null);

  useEffect(() => {
const getData = async() => {
try {
  const response = await fetchMovieReviews(movieId);
  setReviews(response);
} catch (error) {
  console.log(error);
}
}
getData();
  }, [movieId])


  return (
<>
{reviews!== null && reviews.length > 0 ? (
  <ul className={css.reviewsList}>
    {reviews.map(({id, author, content}) => {
return(
  <li key={id} className={css.reviewsItem}>
    <p className={css.reviewsAuthor}><FaRegUserCircle size={25}/> Author: {author}</p>
    <p className={css.reviewsText}>{content}</p>
  </li>
);
    })}
  </ul>
) : (
  <p className={css.noReviews}>Sorry, we have no reviews for this movie yet.</p>
)}
</>
  );
};

export default MovieReviews;