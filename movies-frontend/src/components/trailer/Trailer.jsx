import { useParams } from 'react-router-dom';
import RecatPlayer from 'react-player';
import './Trailer.css';

import React from 'react'

const Trailer = () => {
    return (
        <div className='trailer-container'>
            {
                (key!=null) ? <RecatPlayer controls="true" url={`https://www.youtube.com/watch?v=${key}`}
                width="100%" height="100%" playing={true}/>: null
            }

        </div>
    )
}

export default Trailer