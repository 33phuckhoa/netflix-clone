import React from 'react'
import "../fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css"
import Sniper from './out/Sniper'
import './sass/App.sass'
import { useEffect, useState, useRef } from 'react'

function Banner() {
    const [changeColor, setChangeColor] = useState(true)
   
    const checkInput = () => {
        const check = document.querySelector(".js-check")
        const strange = document.querySelector(".js-strange")
        const appear = document.querySelector(".appear")

        if(check.checked) {
            strange.classList.add("border")
            appear.classList.add("move")
        }
        else {
            strange.classList.remove("border")
            appear.classList.remove("move")
        }
    }


    useEffect(() => {

    }, [])

    const onMute = () => {
        
    }

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 50) {
            setChangeColor(true)
        }
        else {
            setChangeColor(false)
        }
    })
    
    return (
        <div className="banner">
            <div className="banner__icon">
                <nav className={changeColor ? "banner__navbar switch" : "banner__navbar"}>
                    <img className="banner__netflix" src="https://netflix-clone-9a0b9.firebaseapp.com/f4070143e1f521da82a119eb78b434d0.png"/>

                    <div className="banner__control">
                        <div className="banner__control--elem">Home</div>
                        <div className="banner__control--elem">TV Shows</div>
                        <div className="banner__control--elem">Movies</div>
                        <div className="banner__control--elem">Recently Added</div>
                        <div className="banner__control--elem">My List</div>
                    </div>

                    <div className="banner__local">
                        <div className="js-strange banner__local--search">
                            <input onClick={checkInput} type="checkbox" class="js-check search__link ling fas fa-search"></input>
                            <input type="text" className="appear" placeholder="Titles,genres,people" />
                        </div>
                        <div className="banner__local--main">
                            <div className="banner__local--kid">KIDS</div>
                            <div className="banner__local--kid">DVD</div>
                            <i className="ling fas fa-bell banner__local--kid"></i>
                            <div className="banner__block banner__see"></div>
                            <Sniper/>
                            <i class="low fas fa-sort-down"></i>
                        </div>
                    </div>
                </nav>
                <h1 className="banner__item">Narcos</h1>
                <p className="font banner__item">A gritty chronicle of the war against Colombia's infamously violent and powerful drug cartels.</p>
                <div className="banner__item button__int">
                    <button onClick={() => {alert("Not a movie")}} className=" banner__button">
                        <i class="flex1 cursor fas fa-play"></i>
                        <h3 className="cursor">Play</h3>
                    </button>
                    <button className="block banner__button">
                        <i class="flex hand fas fa-plus"></i>
                        <h3 className="hand">MyList</h3>
                    </button>
                    <div className="banner__mute">
                        <i onClick={onMute} class="banner__mu fas fa-volume-mute"></i>
                        <i class="banner__vol fas fa-volume-up"></i>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Banner
