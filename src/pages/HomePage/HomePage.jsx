import css from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';



const HomePage = () => {

    const [trendMovies, setTrendMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

useEffect(() =>{
    const getData = async() => {
        setIsLoading(true);
        try {
            const response = await fetchTrendingMovies();
            setTrendMovies(response.results);
        
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    getData();
}, []);

return (
    <>
        <h1 className={css.title}>Trending today</h1>
        {isLoading && <Loader />}
        {error && (<p className={css.error}>Please, try again late.</p>)}
        {trendMovies.length > 0 && <MovieList moviesList={trendMovies}/>} 
    </>
)
}

export default HomePage;