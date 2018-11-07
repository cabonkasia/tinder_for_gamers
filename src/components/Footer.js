import * as React from "react";
import heart from "../images/heart.png";
import "../Style.css";
import dislike from "../images/dislike.png";
import profile from "../images/profile.png";

export default class Footer extends React.Component {

  handleClick = (event) => {
      this.props.changePhoto({
      currentIndex: this.currentIndex
    });
  }

  render() {
    return (
      <footer className="footer">
        <button><img src={heart} onClick={this.handleClick} className="button" alt="like"/></button>

        <button><img src={dislike} className="button" alt="full profile"/></button>
        <button><img src={profile} onClick={this.handleClick} className="button" alt="dislike"/></button>

      </footer>
    );
  }
}
