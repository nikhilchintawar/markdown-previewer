import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    console.log(event.target.value)
    setText(event.target.value)
  }
  return (
    <div className="App">
      <div>
        <header>
          <h3>Editor</h3>
        </header>
        <form action="">
          <textarea name="text" id="" cols="60" rows="15" value={text} onChange={handleChange}></textarea>
        </form>        
      </div>
      <div id="preview" >
      {text}
      </div>
    </div>
  );
}

export default App;
