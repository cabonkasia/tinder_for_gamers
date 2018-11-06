import React, { Component } from 'react'
import NavBar from './components/NavBar'
import SwipeGalleryContainer from './components/SwipeGalleryContainer'
import Footer from './components/Footer'
  

class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <SwipeGalleryContainer />
        <Footer />
      </div>
    )
  }
}

export default App;
