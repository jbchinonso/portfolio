import React from 'react';
import Home from './pages/Home/Home'
import { BrowserRouter as Router } from 'react-router-dom'
import {HamburgerContextProvider } from './context/hamburgerContext'

function App() {
  return (
    <HamburgerContextProvider>
      <div className="App">
        <Router>
          <Home />
        </Router>
      </div>
    </HamburgerContextProvider>
  );
}

export default App;
