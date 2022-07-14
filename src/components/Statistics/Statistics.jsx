import React from 'react';
import Notification from '../Notification';
import propTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2> Statistics</h2>
    {!good && !neutral && !bad ? (
      <Notification message="There is no feedback" />
    ) : (
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
    )}
  </div>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default Statistics;
