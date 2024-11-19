import { useState } from 'react'
import './App.css'
import Navigation from './Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

function App() {


  return (
    <>
<header>
  <Navigation />
</header>
<main>
  <Routes>
<Route path='*' element={<NotFoundPage />} />
  </Routes>
</main>
    </>
  )
}

export default App
