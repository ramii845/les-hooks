import React from 'react'
import { useState } from 'react';

const Liste_de_films = () => {
    const [Film, setFilm] = useState({titre:""},{rating:""},{date:""},{id:""
    })
    return (
        <div>
           <h1>ajouter un film</h1> 
            <form>
              titre: <input type="text" value={Film.titre}onChange={(e)=>setFilm({titre:e.target.value})}></input>
              rating : <input type="text" value={Film.rating}onChange={(e)=>setFilm({rating:e.target.value})}></input>
               date : <input type="text" value={Film.date}onChange={(e)=>setFilm({date:e.target.value})}></input>
               id : <input type="text" value={Film.id}onChange={(e)=>setFilm({id:e.target.value})}></input>
            </form>
            <h4>le titre film ajouté est : {Film.titre} et la date : {Film.date}</h4>
        </div>
    )
}

export default Liste_de_films;
