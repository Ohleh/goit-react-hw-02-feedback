import React, { Component } from 'react';

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
export default FeedbackOptions;
