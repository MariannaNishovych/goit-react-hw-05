import css from './MovieCast.module.css';
import { fetchMovieCast } from '../../services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieCast = () => {

  const {movieId} = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
const getData = async() => {
  try {
    const response = await fetchMovieCast(movieId);
    setCast(response);
    
  } catch (error) {
    console.log(error);
  }
}
getData();
  }, [movieId]);


  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <ul className={css.castList}>
      {cast !== null && 
      cast.map(({id, name, profile_path, character }) => {
        return (
    <li className={css.castItem} key={id}>
      {profile_path === null ? (
        <div className={css.castNoPhoto}>
          <p> Sorry, there is no photo</p>
        </div>
      ) : (
        <img className={css.castImg}
      src={imgUrl + profile_path}
      alt={name} 
      height='250'
      />
      )}
      <div>
      <p className={css.castInfo}>{name}</p>
      <p className={css.castInfo}>{character}</p>
      </div>
    </li>
    );
    })}
    </ul>
  );
};

export default MovieCast;