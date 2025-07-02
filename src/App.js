import React, { useState } from 'react';
import './App.css';
import bands from './bands';

function App() {
  const [bandName, setBandName] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (event) => {
    setBandName(event.target.value);
    if (result !== null) {
      setResult(null);
    }
  };

  const checkBand = () => {
    const isRock = bands.some(
      (band) => band.toLowerCase() === bandName.toLowerCase().trim()
    );
    setResult(isRock ? 'É do Rock!' : 'Não é do Rock.');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkBand();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ehdoroque?</h1>
        <div className="search-container">
          <input
            type="text"
            value={bandName}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Digite o nome da banda..."
          />
          <button onClick={checkBand}>Verificar</button>
        </div>
        {result && (
          <div className={`result ${result === 'É do Rock!' ? 'rock' : 'not-rock'}`}>
            {result}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;