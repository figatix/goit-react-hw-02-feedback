import PropTypes from 'prop-types';
import React, { Component } from "react";
import Notification from './Notification';

class Statistics extends Component{

  render() {
    const { goodCount, neutralCount, badCount, total, positivePercentage } = this.props
    console.log(total());
    
    return total() !== 0 ? (
      <>
        <p>Good: {goodCount}</p>
        <p>Neutral: {neutralCount}</p>
        <p>Bad: {badCount}</p>
        <p>Total: {total()}</p>
        <p>Percentage of GOOD feedbacks: {positivePercentage()}%</p>
      </>
    ) :
      <Notification message="We are sorry... There is no feedback">
      </Notification>
  }
}

Statistics.propTypes = {
  goodCount: PropTypes.number.isRequired,
  neutralCount: PropTypes.number.isRequired,
  badCount: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
}

export { Statistics }