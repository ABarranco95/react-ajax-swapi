import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StarshipDetails(props) {
    return (
        <div>
            <h3>Name: {props.starship.state} </h3>

            <div>
                <button><Link to='/'>Return</Link></button>
                
            </div>
        </div>
    )
}

export default StarshipDetails;