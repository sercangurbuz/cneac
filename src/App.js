import React, { Component } from 'react';
import Header from './components/Header';
import Trouver from './components/Trouver';
import SelectedItems from './components/SelectedItems';
import Formations from './components/Formations';
import Sectours from './components/Sectours';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Trouver />
        <SelectedItems />
        <Formations />
        <Sectours />
      </div>
    );
  }
}

export default App;
