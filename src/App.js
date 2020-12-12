import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

import Starships from './components/Starships'


import './App.css';



function App() {

  const [ships, setShips] = useState([]);

  const addShips = () => {
    let url = 'https://swapi.dev/api/starships/'
    axios.get(url)
    .then(response => {
      let starships = response.data.results
      setShips(starships)
      
      console.log(response)
    })
  }


  useEffect(() => {
    addShips()
  }, [] )

  
console.log()
  
  return (
    <div className="App">
      <BrowserRouter>

        <Route path='/' 
          render={() => {
            return <Starships ships={ships} />
          }}
        />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
