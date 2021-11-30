import React from 'react'
import { useEffect, useState, useRef } from 'react'
import '../sass/Container.sass'
import Image from './Movie'
import '../sass/Panner.sass'

function Panner({ ORIGINAL__FILM }) {
    const [original, setOriginal] = useState([])
    const [array, setArray] = useState([])
    const [count, setCount] = useState(0)

    const listRef = useRef()

    const handleCLick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === 'left' ) {
            setCount(count - 1)
            listRef.current.style.transform = `translateX(${1000 + distance}px)`
            listRef.current.style.transition = '0.5s'
        }

        if(direction === "right") {
            setCount(count + 1)
            listRef.current.style.transform = `translateX(${-1000 + distance}px)`
            listRef.current.style.transition = '0.5s'
        }
    }

    useEffect(() => {
        fetch(ORIGINAL__FILM)
            .then(res => res.json())
            .then(data => {
                setOriginal(data.results)
                setOriginal([...original, ...data.results])
            })
    }, [])    
    return (
        <div className="panner__general">
            <i onClick={() => handleCLick("left")} className="left1 icofont-thin-left color1"></i>
            <div className="panner__main" ref={listRef}>
                {original.length > 0 && original.map((arr) => (
                    <Image 
                        listRef={listRef}
                        key={arr.id}
                        {...arr}
                    />
                ))}
            </div>
            <i onClick={() => handleCLick("right")} className="right1 icofont-thin-right color1"></i>
            
        </div>
    )
}

export default Panner