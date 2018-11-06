import * as React from 'react'

import '../styles/style.css';

export default function SwipeGallery(props) {

  const initialState = {
    name: "felix",
    age: "",
    image: ""
  }

  return (
    <div className='swipeGalleryContainer'>
      <img className='swipeGalleryCurrentImage'
        src='https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg'
        alt='match-placeholder-profile-pic-girl'
        >
      </img>
      <div className='namePreview'>{initialState.name}, {props.users[0].age}</div>
    </div>
  )
}