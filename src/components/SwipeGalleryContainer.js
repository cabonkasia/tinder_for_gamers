import * as React from 'react'
import { connect } from 'react-redux'
import data from '../data/users'

import SwipeGallery from './SwipeGallery'

export default class SwipeGalleryContainer extends React.Component {
  

  
  render() {
    return (
      <SwipeGallery currentIndex = {}/>
    )
  }
}

