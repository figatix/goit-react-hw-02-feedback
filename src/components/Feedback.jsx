import PropTypes from 'prop-types';
import React, {Component} from "react";

class Feedback extends Component {
  render() {

    const {onLeaveFeedback}=this.props;

    return (
      <>
        <button type="button" onClick={onLeaveFeedback} id='good'>Good</button>
        <button type="button" onClick={onLeaveFeedback} id= 'neutral'>Neutral</button>
        <button type="button" onClick={onLeaveFeedback} id='bad'>Bad</button>
      </>
    )
  }
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export { Feedback };