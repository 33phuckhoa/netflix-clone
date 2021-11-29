import React from 'react'
import { useState, useEffect, useRef } from 'react'
import '../sass/Container.sass'
import '../sass/Panner.sass'
import './Overall'

const IMG_API = 'https://image.tmdb.org/t/p/w500'

function Image({ poster_path, title, original_title, overview, release_date, vote_average, backdrop_path }) {
    const [render, setRender] = useState(true)
    const [listen, setListen] = useState()

    const listItem = useRef()
    const listRef = useRef()

    const dragStart = (e) => {
        
        let distance = listItem.current.getBoundingClientRect().x 
        setListen(distance)
        console.log(distance)
    }

    const dragOver = () => {
        const image = document.querySelector('.image')
        let distance = listItem.current.getBoundingClientRect().x  
        console.log(distance)
        if(listen < distance) {
            image.style.transform = `translateX(${-1000 + distance - 50}px)`
            image.style.transition = '0.5s'
        }
        if(listen > distance) {
            image.style.transform = `translateX(${1000 + distance - 50}px)`
            image.style.transition = '0.5s'
        }
    }

    return (
        <div 
            className="image"
            onDragStart={dragStart}
            onDragEnd={dragOver}
        >
            <img
                ref={listItem}
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
