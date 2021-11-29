import React from 'react'
import { useState } from 'react'
import '../sass/Container.sass'
import '../sass/Panner.sass'
import './Overall'

const IMG_API = 'https://image.tmdb.org/t/p/w500'

function Image({ poster_path, title, original_title, overview, release_date, vote_average, backdrop_path, listRef }) {
    const [render, setRender] = useState(true)

    const dragStart = (value) => {
        let distance = listRef.current.getBoundingClientRect().x 
        if(distance) {
            listRef.current.style.transform = `translateX(${1000 + distance - 50}px)`
            listRef.current.style.transition = '0.5s'
        }
        if(distance) {
            listRef.current.style.transform = `translateX(${-1000 + distance - 50}px)`
            listRef.current.style.transition = '0.5s'
        }
    }

    return (
        <div onDragStart={dragStart} className="image">
            <img className="image-main" width="300px" height="450px" src={IMG_API + poster_path} alt={title}/>
        </div>
    )
}

export default Image
