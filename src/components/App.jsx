import { useState } from 'react'
import './App.css'
import Navigation from './Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import HomePage from '../pages/HomePage/HomePage'
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from './MovieCast/MovieCast'
import MovieReviews from './MovieReviews/MovieReviews'

function App() {


  return (
    <>
<header>
  <Navigation />
</header>
<main>
  <Routes>
<Route path='/' element={<HomePage />} />
<Route path='/movies' element={<MoviesPage />} />
<Route path='/movies/:movieId' element={<MovieDetailsPage />}>
    <Route path="cast" element={<MovieCast />} />
    <Route path="reviews" element={<MovieReviews />} />
</Route>
<Route path='*' element={<NotFoundPage />} />
  </Routes>
</main>
    </>
  )
}

export default App
