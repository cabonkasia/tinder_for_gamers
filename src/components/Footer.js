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
        <button className='btnFooter'><img src={profile} alt="current gamer's profile" className="buttonFooter" /></button>
//         <button className='btnFooter'><img src={'images/Red Button.png'} className="buttonFooter" /></button>
        <DislikeButtonContainer />
      </footer>
    );
  }
}
