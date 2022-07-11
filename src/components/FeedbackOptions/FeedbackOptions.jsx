import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        <button
          type="button"
          name={options[0]}
          value={options[0]}
          onClick={onLeaveFeedback}
        >
          good
        </button>
        <button
          type="button"
          name={options[1]}
          value={options[1]}
          onClick={onLeaveFeedback}
        >
          neutral
        </button>
        <button
          type="button"
          name={options[2]}
          value={options[2]}
          onClick={onLeaveFeedback}
        >
          bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
