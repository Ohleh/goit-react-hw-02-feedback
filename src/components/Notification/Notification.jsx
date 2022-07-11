import propTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <section>
      <p>{message}</p>
    </section>
  );
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
