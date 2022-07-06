import PropTypes from 'prop-types';

//Options мені не потрібні, розмітка повністю статична: в нас завжди лише три варіанта good, neutral bad
const FeedbackOptions = ({ feedbackLeaveHandler }) => {
  return (
    <ul>
      <li>
        <button
          type="button"
          data-name="good"
          onClick={feedbackLeaveHandler}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          data-name="neutral"
          onClick={feedbackLeaveHandler}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          data-name="bad"
          onClick={feedbackLeaveHandler}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  feedbackLeaveHandler: PropTypes.func.isRequired,
};

export default FeedbackOptions;
