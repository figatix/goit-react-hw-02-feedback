import PropTypes from 'prop-types';
import React, { Component } from "react";

import { StyledButton } from "./Button.styled";

class Feedback extends Component {
  render() {

    const { onLeaveFeedback } = this.props;

    return (
      <>
        <StyledButton type="button" onClick={onLeaveFeedback} id='good'>Good</StyledButton>
        <StyledButton type="button" onClick={onLeaveFeedback} id='neutral'>Neutral</StyledButton>
        <StyledButton type="button" onClick={onLeaveFeedback} id='bad'>Bad</StyledButton>
      </>
    )
  }
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}

export { Feedback };