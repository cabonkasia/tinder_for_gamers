import * as React from "react";
import heart from "../heart.png";
import '../styles/style.css'
import dislike from "../dislike.png";
import profile from "../profile.png";
import { addToLiked } from './FooterContainer'
import LikeButtonContainer from './LikeButtonContainer'

export default class Footer extends React.Component {

  handleClick = () => {
    this.props.addToLiked({})}

  render() {
    return (
      <footer className="footer">
        <LikeButtonContainer />
        {/* <button><img src={heart} onClick={this.handleClick} className="button" /></button> */}
        <button><img src={dislike} className="buttonFooter" /></button>
        <button><img src={profile} className="buttonFooter" /></button>
      </footer>
    );
  }
}
