import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Image from './Image'



function Original({ ORIGINAL__FILM }) {
    const [original, setOriginal] = useState([])
    const [char, setChar] = useState([])

    const listRef = useRef()

    const handleCLick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if( direction === 'left') {
            listRef.current.style.transform = `translateX(${1000 + distance}px)`
            listRef.current.style.transition = '0.5s'
        }

        if(direction === "right") {
            listRef.current.style.transform = `translateX(${-1000 + distance}px)`
            listRef.current.style.transition = '0.5s'
        }
    }


    useEffect(() => {
       fetch(ORIGINAL__FILM)
            .then(res => res.json())
            .then(data => {
               setOriginal([...original, ...original, ...data.results])
            })
    },[])    
    return (
        <div className="container__first">
            <i onClick={() => handleCLick("left")} className="left icofont-thin-left color"></i>
            <div className="container__main" ref={listRef}>
                {original.length > 0 && original.map((arr) => (
                    <Image 
                        listRef={listRef}
                        key={arr.id}
                        {...arr}
                    />
                ))}
            </div>
            <i onClick={() => handleCLick("right")} className="right icofont-thin-right color"></i>
        </div>
    )
}

export default Original
