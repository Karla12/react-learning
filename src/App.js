import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowName from './ShowName';
import HomeHead from './HomeHead';
import HomeTitle from './HomeTitle';

const title = 'Class Components';
const userName = [
  'Evelyn', 'Karla', 'Vinco', 'Orbis'
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeTitle
          title={title}
        />
      </header>
      <div>
        {userName && userName.length
          ? <ShowName
              name={userName}
            />
          : <HomeHead
              logo={logo}
            />
        }
      </div>
    </div>
  );
}

export default App;
