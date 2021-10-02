import React , { useState , useEffect } from 'react';

import axios from 'axios';
import './App.css';

function App() {

  const [ writables , setWritables ] = useState([]);

  useEffect( ( ) => {
      axios.get('http://localhost:3001/api/v0/writable')
      .then( data => data.data )
      .then( data => setWritables( JSON.stringify( data )));
  } , [ ] );
  
  return (
    <div className="App">
          { writables }
          <p> hey dude threr </p>
    </div>
  );
}

export default App;
