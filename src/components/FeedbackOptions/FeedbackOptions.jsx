import PropTypes from 'prop-types';
import { ListOptions } from './FeedbackOptions.styled';
import { ButtonOption } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListOptions>
      {options.map(option => (
        <li key={option}>
          <ButtonOption type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </ButtonOption>
        </li>
      ))}
    </ListOptions>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
