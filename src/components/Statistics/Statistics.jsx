import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul>
      <li>
        <span>Good: </span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral: </span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad: </span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total: </span>
        <span>{total}</span>
      </li>
      <li>
        <span>Positive feedback: </span>
        <span>{`${positive}%`}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Statistics;
