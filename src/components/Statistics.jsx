
import React, { Component } from "react";

class Statistics extends Component{

  render() {
    const { goodCount, neutralCount, badCount, total, positivePercentage } = this.props

    return (
      <div>

        <h2>Statistics of feedbacks</h2>

        <p>Good: {goodCount}</p>
        <p>Neutral: {neutralCount}</p>
        <p>Bad: {badCount}</p>
        <p>Total: {total()}</p>
        <p>Percentage of GOOD feedbacks: {positivePercentage()}%</p>

      </div>
      
    )
  }
}

export { Statistics }