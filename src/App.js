import React from 'react';
import './App.css';

import Home from './views/Home';

function App() {
  return (
    <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              Calendar<b>App</b> - POC
            </span>
          </div>
        </header>
        <main>
            <Home />
        </main>
    </div>
  );
}

export default App;
