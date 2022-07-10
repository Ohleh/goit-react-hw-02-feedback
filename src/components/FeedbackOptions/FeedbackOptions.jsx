import React, { Component } from 'react';

class FeedbackOptions extends Component {
  addPointGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  addPointNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addPointBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
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
    );
  }
}

export default FeedbackOptions;
