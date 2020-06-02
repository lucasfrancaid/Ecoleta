import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './services/api';

function App() {
  const [message, setMessage] = useState({English:'Hello', Portuguese:'Ola'});

  useEffect(() => {
    async function Welcome() {
      const response = await api.get('/welcome')
      return setMessage({English: response.data.English, Portuguese: response.data.Portuguese});
    };
    Welcome();
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {message.English}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message.Portuguese}
        </p>
      </header>
    </div>
  );
}

export default App;
