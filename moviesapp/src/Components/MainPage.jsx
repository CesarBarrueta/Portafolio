import React from 'react'
import { useEffect, useState } from 'react';
import {fetchDiscoverMovies} from '../Api/api'
import Nav from './Nav';
import Header from './Header';
import { POSTER_URL } from '../Api/const';

function MainPage() {
    const [discoverMovies, setDiscoverMovies] = useState([])

    useEffect(() => {
        fetchDiscoverMovies().then(data =>{
        setDiscoverMovies(data)
        //console.log(data)
      }).catch(error =>{
        console.log(error)
      })
    }, [])

  return (
    <>
    <Header url={POSTER_URL+"/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg"}></Header>
    <Nav></Nav>
    <div>
      {console.log(discoverMovies.results)}
    </div>
    </>
  )
}

export default MainPage