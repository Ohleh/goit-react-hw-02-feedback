import React from 'react';
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map((massProp, index) => {
      return (
        <button
          key={index}
          type="button"
          name={massProp}
          value={massProp}
          onClick={onLeaveFeedback}
        >
          {massProp}
        </button>
      );
    })}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.object.isRequired,
};

export default FeedbackOptions;
