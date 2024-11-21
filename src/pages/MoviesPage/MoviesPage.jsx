import { useEffect, useState } from 'react';
import css from './MoviesPage.module.css'
import { fetchMovieSearch } from '../../services/api';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

const MoviesPage = () => {
    const [searchMovie, setSearchMovie] = useState([]);
    const [noResult, setNoResult] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const queryValue = searchParams.get("query");

    const handleSubmit = (evt) => {
    setNoResult(false);
    setSearchMovie([]);
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (!query) {
        const notify = () =>
        toast("Please enter the search query!", {
            duration: 2000,
            position: "top-center",
            style: {
            marginTop: "50px",
            },
        });
        notify();
        return;
    }

    setSearchParams({ query: query });
    form.reset();
    };

    useEffect(() => {
    if (!queryValue) {
        return;
    }
    const fetchMovieBySearch = async () => {
        setIsLoading(true);
        try {
        const { results } = await fetchMovieSearch(queryValue);
        if (results.length === 0) {
            setNoResult(true);
            setIsLoading(false);
        } else {
            setSearchMovie(results);
            setIsLoading(false);
            setNoResult(false);
        }
        } catch (err) {
        setError(err.message);
        setIsLoading(false);
        }
    };
    fetchMovieBySearch();
    }, [queryValue]);

    return (
    <section>
        <SearchBar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {noResult && (
        <p>No results.. Please try again.</p>
        )}
        {searchMovie.length > 0 && <MovieList moviesList={searchMovie} />}
        {error && (<p>Please, try again later!</p>)}
        <Toaster />
    </section>
    );
};

export default MoviesPage;