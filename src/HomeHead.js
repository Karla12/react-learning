import React from 'react';
import './App.css';

function HomeHead(logo) {
	return (
		<div className="App">
		<img src={logo.logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
	);
}

export default HomeHead;