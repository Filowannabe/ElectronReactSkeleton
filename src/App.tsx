import React from 'react';
import './App.css';
const { ipcRenderer } = window.require("electron");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi</h1>
        <button onClick={() => {
          ipcRenderer.send('request', 'ping')
          ipcRenderer.on('response', (event, args) => {
            console.log(args)
          })
        }}>Play</button>
      </header>
    </div>
  );
}

export default App;
