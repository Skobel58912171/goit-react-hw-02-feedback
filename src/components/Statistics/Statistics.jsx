import PropTypes from 'prop-types';
import { Thumb } from './Statistics.styled';
import { DataFedback } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Thumb>
      <DataFedback>Good: {good}</DataFedback>
      <DataFedback>Neutral: {neutral}</DataFedback>
      <DataFedback>Bad: {bad}</DataFedback>
      <DataFedback>Total: {total} </DataFedback>
      <DataFedback>Positive feedback: {positivePercentage} </DataFedback>
    </Thumb>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
