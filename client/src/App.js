import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
import Seq from './Seq';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Geomteric Sequence Calc<br />
          <Link to="/seq">Geomteric Sequence Calc</Link>
          <Link to="/documentation">Documentation</Link>
        </header>
        <div>
          <Route path="/seq" component={Seq} />
          <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
