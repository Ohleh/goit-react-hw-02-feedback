import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
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
            <p>total: {total}</p>

            <p>Positive Feedback: {positivePercentage}%</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
