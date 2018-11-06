import * as React from 'react'

import '../styles/style.css';

export default function SwipeGallery(props) {
  return (
    <div className='swipeGalleryContainer'>
      <img className='swipeGalleryCurrentImage'
        src='https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg'
        alt='match-placeholder-profile-pic-girl'
        >
      </img>
      <div className='namePreview'>Stella, 22</div>
    </div>
  )
}