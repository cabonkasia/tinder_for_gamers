import * as React from "react";
import heart from "../heart.png";
import "../Style.css";
import dislike from "../dislike.png";
import profile from "../profile.png";
import { addToMatchList, ADD_TO_MATCH_LIST } from "../actions/addToMatchList"
import { connect } from 'react-redux'
import store from "../store";

class Footer extends React.Component {
  likeButton() {
    this.props.addToMatchList()
  }

  // clickLike = () => store.dispatch({ type: ADD_TO_MATCH_LIST })
  
  render() {
    return (
      <footer className="footer">
        <button><img
          src={heart}
          alt={'like'}
          className="button"
          onClick={this.likeButton.bind(this)}
        /></button>

        <button><img src={dislike} className="button" /></button>
        <button><img src={profile} className="button" /></button>

      </footer>
    );
  }
}

export default connect(null, { addToMatchList })(Footer)