import PropTypes from 'prop-types';
import React, { Component } from "react";
import Notification from 'components/Notification/Notification';

import { StyledStatList } from './StatList.styled';
import { StyledStatItem } from './StatItem.styled';


class Statistics extends Component {

  render() {
    const { goodCount, neutralCount, badCount, total, positivePercentage } = this.props

    return total() !== 0 ? (
      <StyledStatList>
        <StyledStatItem>Good: {goodCount}</StyledStatItem>
        <StyledStatItem>Neutral: {neutralCount}</StyledStatItem>
        <StyledStatItem>Bad: {badCount}</StyledStatItem>
        <StyledStatItem>Total: {total()}</StyledStatItem>
        <StyledStatItem>Percentage of GOOD feedbacks: {positivePercentage()}%</StyledStatItem>
      </StyledStatList>
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