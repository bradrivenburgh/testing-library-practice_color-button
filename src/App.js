import React, { useState } from 'react';
import "./App.css";

function App() {
  const [color, setColor] = useState('red');
  const [text, setText] = useState('Change to blue')
  const handleClick = (e) => {
    const buttonSwitch = {
      red: {
        color: 'blue',
        text: 'Change to red'
      },
      blue: {
        color: 'red',
        text: 'Change to blue'
      }
    }
    setColor(buttonSwitch[e.target.style.backgroundColor].color);
    setText(buttonSwitch[e.target.style.backgroundColor].text)
  };

  return (
    <div>
      <button 
        style={{ backgroundColor: color }}
        onClick={(e) => handleClick(e)}>
          {text}
      </button>
    </div>
  );
}

export default App;
