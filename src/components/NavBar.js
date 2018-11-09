import * as React from 'react'
import '../styles/style.css'
import { NavLink } from 'react-router-dom'

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
            <NavLink to='/' className='navLinks' style={{ textDecoration: 'none' }}>
              <img src={'images/Logo.png'} className="logo" />
            </NavLink>
          </div>

          <div className='profileButton'>
            <NavLink to='/messages' className='navLinks' style={{ textDecoration: 'none' }}>
              <img className='imgProfile'
                src="images/messagesIcon.png"
                alt='match-placeholder-profile-pic-girl'
              >
              </img>
              <h1 className='buttonUndertext'>MESSSAGES</h1>
            </NavLink>
          </div>


        </nav>
      </div>
    )
  }
}