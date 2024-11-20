import css from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';



const HomePage = () => {

    const[trendMovies, setTrendMovies] = useState([]);

useEffect(() =>{
    const getData = async() => {
        try {
            const response = await fetchTrendingMovies();
            setTrendMovies(response.results);
        } catch (error) {
            console.log(error);
        }
    }
    getData();
}, []);

  return (
    <div>
        <h1 className={css.title}>Trending today</h1>
        <MovieList moviesList={trendMovies}/>
    </div>
  )
}

export default HomePage;