import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import css from './MovieDetailsPage.module.css'
import { useEffect, useState, useRef } from 'react';
import { fetchMovieDetails } from '../../services/api';
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiArrowGoBackFill } from "react-icons/ri";

const MovieDetailsPage = () => {
    const {movieId} = useParams();
    const[movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

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
    <>
    <Link to={backLinkRef.current}> <RiArrowGoBackFill /> Go back</Link>

 {movieDetails !== null && (
        <div className={css.detailBox}>
          <img
            className={css.detailImg}
            src={imgUrl + movieDetails.backdrop_path}
            alt={movieDetails.title}
          />
          <div className={css.detailInfo}>
            <h1 className={css.detailTitle}>
              {movieDetails.title}{" "}
              <span className={css.detailYear}>
                ({movieDetails.release_date.split("-")[0]})
              </span>
            </h1>
            <p className={css.detailScore}>
              User Score:{" "}
              <span className={css.detailUserScore}>
                {Math.floor(parseFloat(movieDetails.vote_average) * 10)}
              </span>
              %
            </p>
            <h2 className={css.detailSubTitle}>Overview</h2>
            <p className={css.detailDescr}>{movieDetails.overview}</p>
            <h2 className={css.detailSubTitle}>Genres</h2>
            <p className={css.detailDescr}>
              {movieDetails?.genres?.map((genre) => genre.name).join(" ")}
            </p>
          </div>
        </div>
)}

<div className={css.detailInfoContainer}>
<h2 className={css.detailSubTitle}>Aditional information</h2>
  <nav className={css.detailNav}>
    <Link to='cast'><BiSolidMoviePlay />Cast</Link>
    <Link to='reviews'><BiSolidMoviePlay />Reviews</Link>
</nav>
   <Outlet />
</div>
      
 </>
  );
};

export default MovieDetailsPage