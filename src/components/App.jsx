import React, { Component } from "react";
import { Feedback } from "./Feedback";
import { Statistics } from "./Statistics";


class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedbackVote = (e) => {
    const currentBtnId = e.target.id
    this.setState((prevState) => (
      {[currentBtnId]: prevState[currentBtnId] + 1}
    ))
  } 

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, el) => (acc+el ),0 )
  }

  render() {
    this.countTotalFeedback()
    const {good, neutral, bad} = this.state

    return (

      <>
        <Feedback
          addVote={this.handleFeedbackVote}
      />

      <Statistics 
          goodCount={good}
          neutralCount={neutral}
          badCount={bad}
          total={ this.countTotalFeedback() }
          positivePercentage ={""}
      />
      </>
      

    );
  }
    

}


export {App};
