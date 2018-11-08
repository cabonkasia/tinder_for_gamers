import * as React from 'react'
import dislike from "../dislike.png";

export default function LikeButton(props) {
  //cannot access properties through "this" keyword because it's not a class
  return (
    <button onClick={props.handler}><img src={dislike} className="button" alt="like btn"/></button>
    
  )
}