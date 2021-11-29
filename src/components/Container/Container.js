import React from 'react'
import Panner from './Panner'
import Original from './Original'
import Overall from './Overall'
const ORIGINAL__FILM = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a58c603908303aacf94263cb09155b27&language=en-US&page=5'
const TOP__RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a58c603908303aacf94263cb09155b27&language=en-US&page=1'
const TRENDING = 'https://api.themoviedb.org/3/movie/popular?api_key=a58c603908303aacf94263cb09155b27&language=en-US&page=4'
const ACTION__MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a58c603908303aacf94263cb09155b27&language=en-US&page=2'
const COMEDY__MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a58c603908303aacf94263cb09155b27&language=en-US&page=3'
const HONOR__MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a58c603908303aacf94263cb09155b27&language=en-US&page=12'
const ROMANCE__MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a58c603908303aacf94263cb09155b27&language=en-US&page=9'
const DOCUMENTS = 'https://api.themoviedb.org/3/movie/popular?api_key=a58c603908303aacf94263cb09155b27&language=en-US&page=10'

function Container() {

    return (
        <div className="container">
            <div className="container__control container__clo">
                <h3 className="container__name1  container__branch">Netflix Originals</h3>
                <Original ORIGINAL__FILM={ORIGINAL__FILM}/>
            </div>
            <div className=" container__trending container__control">
                <h3 className="container__name1">Trending</h3>
                <Panner ORIGINAL__FILM={TRENDING} index={0}/>
            </div>
            <div className="container__original container__control">
                <h3 className="container__name1">Top Rated</h3>
                <Panner ORIGINAL__FILM={TOP__RATED} index={1}/>
            </div>
            <div className="container__original container__control">
                <h3 className="container__name1">Action Movies</h3>
                <Panner ORIGINAL__FILM={ACTION__MOVIES} index={2}/>
            </div>
            <div className="container__original container__control">
                <h3 className="container__name1">Comedy Movies</h3>
                <Panner ORIGINAL__FILM={COMEDY__MOVIES} index={3}/>
            </div>
            <div className="container__original container__control">
                <h3 className="container__name1">Honor Movies</h3>
                <Panner ORIGINAL__FILM={HONOR__MOVIES} index={4}/>
            </div>
            <div className="container__original container__control">
                <h3 className="container__name1">Romance Movies</h3>
                <Panner ORIGINAL__FILM={ROMANCE__MOVIES} index={5}/>
            </div>
            <div className="container__original container__control">
                <h3 className="container__name1">Documentaries</h3>
                <Panner ORIGINAL__FILM={DOCUMENTS} index={6}/>
            </div>
        </div>
    )
}

export default Container
