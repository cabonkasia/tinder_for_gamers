import * as React from "react";
import heart from "../images/heart.png";
import "../Style.css";
import dislike from "../images/dislike.png";
import profile from "../images/profile.png";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <button><img src={heart} className="button" /></button>

        <button><img src={dislike} className="button" /></button>
        <button><img src={profile} className="button" /></button>

      </footer>
    );
  }
}
