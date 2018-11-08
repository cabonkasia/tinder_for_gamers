import * as React from "react";
import '../styles/style.css'
import profile from "../profile.png";
import { addToLiked } from './FooterContainer'
import LikeButtonContainer from './LikeButtonContainer'
import DislikeButtonContainer from "./DislikeButtonContainer";

export default class Footer extends React.Component {

  // handleClick = () => {
  //   this.props.addToLiked({})
  // }

  render() {
    return (
      <footer className="footer">
        <LikeButtonContainer />
        {/* <button><img src={heart} onClick={this.handleClick} className="button" /></button> */}
        <button><img src={profile} className="buttonFooter" /></button>
        <DislikeButtonContainer />
        {/* <button><img src={profile} className="buttonFooter" /></button> */}
      </footer>
    );
  }
}
