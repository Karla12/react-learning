import React from 'react';
import ShowName from './ShowName';

function FunctionalComponent(props) {
    const { title, users } = props;
    return (
      <div>
        <header className="App-header">
          <h2>Hello, my name is {title}</h2>
        </header>
        <ShowName
          name={users}
        />
      </div>
    );
}

export default FunctionalComponent;