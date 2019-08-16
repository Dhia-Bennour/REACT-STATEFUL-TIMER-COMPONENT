import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Timecont from './App';

function App(props) {
    return (
      <div className="App">
        <Timecont />
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  
