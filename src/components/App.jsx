import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // addPointGood = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };

  // addPointNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };

  // addPointBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  addPoint = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const pos = this.state.good + this.state.neutral;
    const count = (pos / total) * 100;
    return !count ? 0 : count.toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.addPoint}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />

        {/* <Notification message="There is no feedback"/> */}
      </>
    );
  }
}

export default App;
