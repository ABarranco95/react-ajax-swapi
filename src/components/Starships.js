// import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// import StarshipPage from './StarshipPage';


function Starships(props) {

    const starWarShips = props.ships.map((eachShip) => {
        return <div class='ship-container'>
            <p>{eachShip.name}</p>
        </div>
    })

    return (
        <div>
            <h1>Star Wars StarShips</h1>
            <div class='grid-container'>
                {starWarShips}
            </div>
        </div>
    )
}

export default Starships