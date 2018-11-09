import * as React from "react";
import '../styles/style.css'
import profile from "../profile.png";
import { addToLiked } from './FooterContainer'
import LikeButtonContainer from './LikeButtonContainer'
import DislikeButtonContainer from "./DislikeButtonContainer";

export default class Footer extends React.Component {


  render() {
    return (
      <footer className="footer">
        <LikeButtonContainer />
        <button><img src={profile} className="buttonFooter" alt="current gamer's profile"/></button>
        <DislikeButtonContainer />
      </footer>
    );
  }
}
