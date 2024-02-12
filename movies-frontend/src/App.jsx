import React from 'react';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>Movie App</h1>
    </>
  )
}

export default App
