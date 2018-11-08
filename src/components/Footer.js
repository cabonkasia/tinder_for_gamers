import * as React from "react";
import heart from "../heart.png";
import '../styles/style.css'
import dislike from "../dislike.png";
import profile from "../profile.png";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <button><img src={dislike} className="buttonFooter" /></button>
        <button><img src={profile} className="buttonFooter" /></button>
        <button><img src={heart} className="buttonFooter" /></button>
        
      </footer>
    );
  }
}
