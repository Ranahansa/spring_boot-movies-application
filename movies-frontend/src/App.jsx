import React from 'react';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies: ', error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={Layout }>

          </Route>
      </Routes>
    </div>
  )
}

export default App
