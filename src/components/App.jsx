import React, { Component } from 'react';
// import FeedbackOptions from './FeedbackOptions';
// import Statistics from './Statistics/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addPointGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  addPointNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addPointBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
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
        {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
        <div>
          <h2> Please leave Feetback</h2>
          <button type="button" onClick={this.addPointGood}>
            good
          </button>
          <button type="button" onClick={this.addPointNeutral}>
            neutral
          </button>
          <button type="button" onClick={this.addPointBad}>
            bad
          </button>
        </div>

        {/* <Statistics good={good} neutral={neutral} bad={bad} total={total} /> */}
        <div>
          <h2> Statistics</h2>
          <ul>
            <li>
              <p>good: {good}</p>
            </li>
            <li>
              <p>neutral: {neutral}</p>
            </li>
            <li>
              <p>bad: {bad} </p>
            </li>
            <li>
              <p>total: {this.countTotalFeedback()}</p>

              <p>
                Positive Feedback: {this.countPositiveFeedbackPercentage()}%
              </p>
            </li>
          </ul>
        </div>

        {/* <Notification message="There is no feedback"/> */}
      </>
    );
  }
}

export default App;
