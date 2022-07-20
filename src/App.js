import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <header>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
      </header>
    );
  }
}

export default App;
