import PropTypes from 'prop-types';

const Notification = ({message = ''})=>(
    <div>
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;