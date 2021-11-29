import React from 'react'
import '../sass/Overall.sass'

const IMG_API = 'https://image.tmdb.org/t/p/w500'

function Overall({ original_title, overview, release_date, vote_average, backdrop_path }) {
    const raiting = parseFloat(vote_average)*10

    return (
        <div className="overall">
            <img src={IMG_API + backdrop_path}/>
            <div className="overall__main">
                <h1 className="overall_name">{original_title}</h1>
                <h3 className="overall__core">
                    <h3 className="overall__rating">Rating: {raiting}%</h3>
                    <h3 className="overall__common">Release date: {release_date} Runtime: m</h3>
                    <p overall__overview>{overview}</p>
                </h3>
            </div>
            <div className="overall__button">
                <i class="overall__button--main fas fa-play">PLAY</i>
                <i class="overall__button--main fas fa-plus">MY LIST</i>
            </div>
        </div>
    )
}

export default Overall
