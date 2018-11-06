import React, { Component } from 'react';
import NavBar from './components/NavBar'
import SwipeGalleryContainer from './components/SwipeGalleryContainer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SwipeGalleryContainer />
      </div>
    );
  }
}

export default App;
