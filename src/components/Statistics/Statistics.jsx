import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: </span>
      <span>Positive feedback:</span>
    </div>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  //   total: PropTypes.number.isRequired,
  //   positivePercentage: PropTypes.number,
};

export default Statistics;
