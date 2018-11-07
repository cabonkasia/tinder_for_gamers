import * as React from 'react'
import '../styles/style.css'
import logoapp from '../logoapp.png'
import message from '../message.png'

export default class NavBar extends React.Component {
  render(){  
  return (<nav className="navbar">
  {/* <div className="button-container">
     <img  className="imgProfile" scr='https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg'  alt="user profile img"/>
  </div> */}

<img className='imgProfile'
        src="https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg"
        alt='match-placeholder-profile-pic-girl'
        >
      </img>


  {/* <div className="button-container">
  <img src={imageProfile} className="user profile img" />
    </div> */}


  <div className="button-container">
  <img src={logoapp} className="logo" />
    </div>

<div className="button-container">
  <img src={message} className="button" />
    </div>


      </nav>
    )
  }
}

