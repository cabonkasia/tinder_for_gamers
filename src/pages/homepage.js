import React from 'react'

import NavBar from '../components/NavBar'
import SwipeGalleryContainer from '../components/SwipeGalleryContainer'
import Footer from '../components/Footer'

export default function HomePage(props) {
  return (
    <div>
      <NavBar />
      <SwipeGalleryContainer />
      <Footer />
    </div>
  )
}