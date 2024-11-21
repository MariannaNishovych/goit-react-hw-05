import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import { BiSolidMoviePlay } from "react-icons/bi";

const MovieList = ({moviesList}) => {
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
{moviesList.map(({ id, title }) => (
  <li key={id} 
  className={css.movieItem}>
    <Link 
    state={{from: location}} 
    to={`/movies/${id}`}>
    <p><BiSolidMoviePlay /> {title}</p>
    </Link>
    </li>
))
}
</ul>
  );
};

export default MovieList;