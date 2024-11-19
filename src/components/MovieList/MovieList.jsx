import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({moviesList}) => {
  return (
    <ul className={css.moviesList}>
 
{moviesList.map((movie) => (
  <li key={movie.id} className={css.movieItem}>
    <Link to={`/movies/${movie.id}`}>
    <p>{movie.title}</p>
    </Link>
    </li>
))
}
</ul>
  );
};

export default MovieList;