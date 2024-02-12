import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material'

const Hero = ({movies}) => {
    return (
        <div>
            <Carousel>
                {
                    movies.map(movie => {
                        return(
                            <Paper>
                                <div className='card container'>
                                    <div key={movies.imdbId} className='card'>
                                        <div className='details'>
                                            <div className='poster'>
                                                <img src = {movie.poster} alt="" />
                                            </div>
                                            <div className='title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero