import HomePage from './pages/HomePage';
import TextPage from './pages/TextPage';
import EndPage from './pages/EndPage';
import React, { useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState(false);
  const [end, setEnd] = useState(false);

  let words = ['hi', 'my', 'name', 'is'];


  if (text) {
    return (
      <div className='App'>
        <TextPage words={words} setText={setText} setEnd={setEnd} />
      </div>
    )
  }

  if (end) {
    return (
      <div className='App'>
        <EndPage setText={setText} setEnd={setEnd} />
      </div>)
  }

  return (
    <div className="App">
      <HomePage words={words} setText={setText} />
    </div>
  );
}

export default App;
