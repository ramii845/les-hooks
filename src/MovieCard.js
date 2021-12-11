import React from 'react'
import Film, { moviesData } from './movieData';
import { useState } from 'react';

const MovieCard = () => {
    const [Movie, setMovie] = useState(moviesData)
    return (
        <div>

           {moviesData.map((el)=>
           <div>
          name: <h4>{el.name}</h4>
             <img src={el.image}/> <br></br>
           rating :<h4>{el.rating}</h4>
           date :<h4>{el.date}</h4>
          id: <h4>{el.id}</h4>
           </div>
           )} 
        </div>
    )
}

export default MovieCard;
