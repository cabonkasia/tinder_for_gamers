import * as React from 'react'
import '../styles/style.css'
import logoapp from '../logoapp.png'
import message from '../message.png'

export default class NavBar extends React.Component {
  render(){  
    return (
      <div className='navbarContainer'>
        <nav className="navbar">

          <div className='profileButton'>
            <img className='imgProfile'
              src="https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg"
              alt='match-placeholder-profile-pic-girl'
            >
            </img>
            <h1 className='buttonUndertext'>MY PROFILE</h1>
          </div>

          <div className='profileButton'>
            <img src={'images/Logo.png'} className="logo" />
          </div>

          <div className='profileButton'>
            <img className='imgProfile'
              src="images/messagesIcon.png"
              alt='match-placeholder-profile-pic-girl'
            >
            </img>
            <h1 className='buttonUndertext'>MESSSAGES</h1>
          </div>


        </nav>
      </div>
    )
  }
}