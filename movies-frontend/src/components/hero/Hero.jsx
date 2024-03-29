import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import Reviews from '../reviews/Reviews'
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId){
        navigate(`/Reviews/${movieId}`)
    }

    return (
        <div className='carousel-container'>
            <Carousel>
                {
                    movies.map(movie => {
                        return(
                            <Paper>
                                <div className='card-container'>
                                    <div key={movie.imdbId} className='card' style={{"--img" : `url(${movie.backdrops[0]})`}}>
                                        <div className='details'>
                                            <div className='poster'>
                                                <img src = {movie.poster} alt="" />
                                            </div>
                                            <div className='title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className='buttons-container'>
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>  Watch Now
                                                <div className='play-button-icon-container'>
                                                    <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                                                </div>
                                                </Link>
                                                <div>
                                                    <Button variant = "info" onClick={() => reviews(movie.imdbId)}> Reviews</Button>
                                                </div>
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