import { useState } from 'react';
import './App.css';
import bands from './lists/bands';
import phrases from './lists/phrases';

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
    setResult(isRock ? 'eh do roque 😎🤘' : chooseRandomPhrase );
  };

  const chooseRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }
    
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkBand();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Eh do roque???</h1>
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
          <div className={`result ${result === 'eh do roque 😎🤘' ? 'rock' : 'not-rock'}`}>
            {result}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;