import * as React from 'react'

import '../styles/style.css';

export default function SwipeGallery(props) {

  const initialState = {
    currentIndex: ""
  }

  return (
    <div className='swipeGalleryContainer'>
      <img className='swipeGalleryCurrentImage'
        src={{allImagesArr}[{state.props.initialState}]}
        alt='match-profile-pic'
        >
      </img>
      <div className='namePreview'>{initialState.name}, {props.users[0].age}</div>
    </div>
  )
}