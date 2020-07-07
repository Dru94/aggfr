import React from 'react';
import './assets/styles/App.css';
import TopBar from './containers/topbar.jsx';
import Main from './containers/main/main.jsx';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Main/>
    </div>
  );
}

export default App;
