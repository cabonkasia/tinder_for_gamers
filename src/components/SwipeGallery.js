import * as React from 'react'

import '../styles/style.css';

export default function SwipeGallery(props) {
  // constructor(props) {
  //   super(props)

    
  // }
  //const userOne = props.filter(user => user.id === 0)
  return (
    <div className='swipeGalleryContainer'>
      <img className='swipeGalleryCurrentImage'
         src={`/images/${props.users[0].images[0]}`}
        alt='match-placeholder-profile-pic-girl'
        >
      </img>
      <div className='namePreview'>{props.users[0].name}, {props.users[0].age}</div>
    </div>
  )
}