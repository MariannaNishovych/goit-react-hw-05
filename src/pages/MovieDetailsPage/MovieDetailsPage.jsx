import { Link, useParams } from 'react-router-dom'
import css from './MovieDetailsPage.module.css'
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../services/api';

const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const[movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
        const getData = async() => {
            try {
                const response = await fetchMovieDetails(movieId);
                setMovieDetails(response);
            } catch (error) {
            console.log(error);
            }
        }
        getData()
    }, [movieId]);

    const imgUrl = "https://image.tmdb.org/t/p/w500";

if(!movieDetails) {
    return <h2>Loading....</h2>
}
  return (
    <div>
        <Link>Go back</Link>

        <div>
    <img
    className={css.movieDetImage}
    src={imgUrl + movieDetails.backdrop_path}
    alt={`${movieDetails.title}`}
    />
    <h2>{movieDetails.title}</h2>
        </div>
        <div>
            <h2>Aditional information</h2>
            <nav>
                <Link to='cast'>Cast</Link>
                <Link to='reviews'>Reviews</Link>
            </nav>
        </div>
        
    </div>
 

  )
}

export default MovieDetailsPage