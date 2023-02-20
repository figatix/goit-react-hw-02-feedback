
import React, { Component } from "react";

class Statistics extends Component{

  render() {
    const { goodCount, neutralCount, badCount, total } = this.props

    return (
      <div>

        <h2>statistics of feedbacks</h2>

        <p>Good: {goodCount}</p>
        <p>Neutral: {neutralCount}</p>
        <p>Bad: {badCount}</p>
        <p>Total: {total}</p>

      </div>
      
    )
  }
}

export { Statistics }