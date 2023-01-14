import PropTypes from 'prop-types';
import { DataText } from './Notification.styled';
const Notification = ({ message }) => {
  return (
    <>
      <DataText>{message}</DataText>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
