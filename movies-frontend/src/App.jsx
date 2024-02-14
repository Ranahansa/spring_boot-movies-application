import React from 'react';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';


function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  }

  const getMovieData = async (movieId) => {
    try{
      const response = await api.get("/api/v1/movies/${movieId}");
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.setReviews);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Layout /> }></Route>
        <Route path="/" element={<Home movies={movies}/>}></Route>
        <Route path = "/Trailer/:ytTrailerId" element={<Trailer />}></Route>
        <Route path = "/Reviews/:imdbId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews ={reviews} setReviews={setReviews} />}></Route>
      </Routes>
    </div>
  )
}

export default App
