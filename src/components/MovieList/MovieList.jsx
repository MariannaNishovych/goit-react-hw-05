import { Link } from 'react-router-dom';
import css from './MovieList.module.css';
import { BiSolidMoviePlay } from "react-icons/bi";

const MovieList = ({moviesList}) => {
  return (
    <ul className={css.moviesList}>
 
{moviesList.map((movie) => (
  <li key={movie.id} className={css.movieItem}>
    <Link to={`/movies/${movie.id}`}>
    <p><BiSolidMoviePlay />{movie.title}</p>
    </Link>
    </li>
))
}
</ul>
  );
};

export default MovieList;