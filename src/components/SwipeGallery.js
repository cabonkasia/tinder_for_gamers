import * as React from 'react'

import '../styles/style.css';

export default function SwipeGallery(props) {
  return (
    <div className='galleryBox'>
      <div className='swipeGalleryContainer'>
        <img className='swipeGalleryCurrentImage'
          src={`/images/${props.currentUser.images[0]}`}
          alt='match-placeholder-profile-pic-girl'
        />
        <div class="shadow"></div>
        <div className='namePreview'>{props.currentUser.name}, {props.currentUser.age}</div>
      </div>
    </div>
  )
}