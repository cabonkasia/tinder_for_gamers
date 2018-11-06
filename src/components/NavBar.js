import * as React from 'react'
import '../styles/style.css'


export default class NavBar extends React.Component {
  render(){  
  return (<nav className="navbar">
  <div className="button-container">
     <img scr="../images/heart.png" className="button" alt="user profile img"/>
  </div>
  <div className="button-container">
    <img scr="../images/dislike.png" className="button" alt="home button"/>
    </div>
    <div className="button-container">
    <img scr="../images/profile.png" className="button" alt="matches and messages button"/>
    </div>
      </nav>
    )
  }
}

