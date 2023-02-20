
import React, {Component} from "react";

class Feedback extends Component {
  render() {

    const {addVote}=this.props;

    return (

      <div className="feedback-container">
        <h2>Dude, leave your feedback{':)'} Please!</h2>

        <button type="button" onClick={addVote} id='good'>Good</button>
        <button type="button" onClick={addVote} id= 'neutral'>Neutral</button>
        <button type="button" onClick={addVote} id='bad'>Bad</button>
      </div>
      
      
    )
  }
}

export { Feedback };