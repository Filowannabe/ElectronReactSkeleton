import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/navBar'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Nav />
  </React.StrictMode>,
  document.getElementById('root')
);

