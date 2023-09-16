import {API_MOVIE_DISCOVER, API_KEY, API_IMAGES} from './const'

export async function fetchDiscoverMovies(){
    return fetch(API_MOVIE_DISCOVER+"/?api_key="+API_KEY)
      .then(response => {
      return response.json()
    }).catch(error => {
        console.log(error)
    })
}

export const fetchImage = (movie_id) =>{
    return fetch(API_IMAGES+movie_id+'/images?api_key='+API_KEY)
}
