import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Haj, moja UnaSoft</h1>
        <p>This is working</p>
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a react app!!!'));
  }
}

export default App;
