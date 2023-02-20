import React, { Component } from "react";
import { Feedback } from "./Feedback";
import { Section } from "./Section";
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

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => (acc+el ),0 )
  }

  countPositiveFeedbackPercentage = () => {
    const percentage = this.state.good / this.countTotalFeedback();

    return (percentage ? Math.ceil(percentage * 100) : 0);
  }

  render() {
    this.countPositiveFeedbackPercentage()
    const { good, neutral, bad } = this.state

    return (

      <>

      <Section title="Dude, leave your feedback:) Please!">
        <Feedback
        onLeaveFeedback={this.handleFeedbackVote}
        />
      </Section>

      <Section title="Statistics of feedbacks">
        <Statistics 
          goodCount={good}
          neutralCount={neutral}
          badCount={bad}
          total={ this.countTotalFeedback }
          positivePercentage ={this.countPositiveFeedbackPercentage}
        />
        </Section>
        
      </>
    );
  }
}


export {App};
