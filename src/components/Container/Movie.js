import React from 'react'
import { isElementOfType } from 'react-dom/test-utils'
import '../sass/Container.sass'
import '../sass/Panner.sass'
import Overall from './Overall'

const IMG_API = 'https://image.tmdb.org/t/p/w500'

function Movie({ backdrop_path, title, original_title, overview, release_date, vote_average }) {
    return (
        <div className="movie">
            <img className="movie-main" width="300px" height="450px" src={IMG_API + backdrop_path} alt={title}/>
        </div>
    )
}

export default Movie
