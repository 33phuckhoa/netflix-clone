import React, {useState, useRef} from 'react'
import { isElementOfType } from 'react-dom/test-utils'
import '../sass/Container.sass'
import '../sass/Panner.sass'
import Overall from './Overall'


const IMG_API = 'https://image.tmdb.org/t/p/w500'

function Movie({ backdrop_path, title, original_title, overview, release_date, vote_average, listRef }) {
    const [listen, setListen] = useState()

    const listItem = useRef()

    const dragStart = () => {
        let distance = listItem.current.getBoundingClientRect().x 
        setListen(distance)
        console.log(distance)
    }

    const dragEnd = () => {
        let distance = listItem.current.getBoundingClientRect().x  
        console.log(distance)
        if(listen < distance) {
            listRef.current.style.transform = `translateX(${-1000 + listen - 50}px)`
            listRef.current.style.transition = '0.5s'
        }
        if(listen > distance) {
            listRef.current.style.transform = `translateX(${1000 + listen - 50}px)`
            listRef.current.style.transition = '0.5s'
        }
    }
    return (
        <div 
            className="movie">
            <img 
                onDragEnd={dragEnd}
                onDragStart={dragStart}
                ref={listItem}
                className="movie-main" 
                width="300px" 
                height="450px" 
                src={IMG_API + backdrop_path} 
                alt={title}
            />
        </div>
    )
}

export default Movie
