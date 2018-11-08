import * as React from 'react'
import heart from "../heart.png";

export default function LikeButton(props) {
  //cannot access properties through "this" keyword because it's not a class
  return (
    <button onClick={props.handler}><img src={heart} className="button" alt="like btn"/></button>
    
  )
}