import * as React from 'react'
import puzzlepiece from "../puzzlepiece.png";

export default function LikeButton(props) {
  //cannot access properties through "this" keyword because it's not a class
  return (
    <img src={puzzlepiece} className="notificationMessages" alt=""/>
  )
}
    
 