import React, { Component } from 'react';
import propTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const massProps = Object.keys(options);

    return (
      <div>
        {massProps.map((massProp, index) => {
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
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.object.isRequired,
};

export default FeedbackOptions;
