import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const massProps = Object.keys(options);
    console.log(massProps);

    return (
      <div>
        {massProps.map(massProp => {
          return (
            <button
              type="button"
              name="good"
              value={massProp}
              onClick={onLeaveFeedback}
            >
              {massProp}
            </button>
          );
        })}
      </div>
    );

    /* <button
          type="button"
          name="good"
          value={options[0]}
          onClick={onLeaveFeedback}
        >
          good
        </button>
        <button
          type="button"
          name="neutral"
          value={options[1]}
          onClick={onLeaveFeedback}
        >
          neutral
        </button>
        <button
          type="button"
          name="bad"
          value={options[2]}
          onClick={onLeaveFeedback}
        >
          bad
        </button> */
  }
}
export default FeedbackOptions;
