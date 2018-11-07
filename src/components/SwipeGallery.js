import * as React from 'react'

import '../styles/style.css';

export default function SwipeGallery(props) {
  // constructor(props) {
  //   super(props)

    
  // }
  
  return (
    <div className='swipeGalleryContainer'>
      <img className='swipeGalleryCurrentImage'
         src={`/images/`}
        alt='match-placeholder-profile-pic-girl'
        >
      </img>
      <div className='namePreview'>Stella, 22</div>
    </div>
  )
}