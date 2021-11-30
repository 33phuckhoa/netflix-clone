import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../sass/Container.sass'
import '../sass/Panner.sass'
import './Overall'

const IMG_API = 'https://image.tmdb.org/t/p/w500'

function Image({ poster_path, title, original_title, overview, release_date, vote_average, backdrop_path, listRef }) {
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
        if(listen > distance) {
            listRef.current.style.transform = `translateX(${-1000 + listen - 50}px)`
            listRef.current.style.transition = '0.5s'
        }
        if(listen < distance) {
            listRef.current.style.transform = `translateX(${1000 + listen - 50}px)`
            listRef.current.style.transition = '0.5s'
        }
    }

    return (
        <div 
            className="image"
            onDragEnd={dragEnd}
            onDragStart={dragStart}
            ref={listItem}
            >
            <img
                className="image-main" 
                width="300px" 
                height="450px" 
                src={IMG_API + poster_path} 
                alt={title}
            />
        </div>
    )
}

export default Image
