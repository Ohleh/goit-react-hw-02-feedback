import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addPoint = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const pos = good + neutral;
    const count = (pos / total) * 100;
    return !count ? 0 : count.toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div>
          <Section title="Please leave Feetback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.addPoint}
            />
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>

          {/* <Notification message="There is no feedback"/> */}
        </div>
      </>
    );
  }
}

export default App;
