import * as React from 'react'
import '../styles/style.css'

export default class NavBar extends React.Component {
  render(){  
  return (<nav className="navbar">
  <div className="button-container">
     <img scr="https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg" className="button" alt="user profile img"/>
  </div>
  <div className="button-container">
    <img scr="https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg" className="button" alt="home button"/>
    </div>
    <div className="button-container">
    <img scr="https://hdqwalls.com/download/blonde-cute-girl-pg-2048x2048.jpg" className="button" alt="matches and messages button"/>
    </div>
      </nav>
    )
  }
}

