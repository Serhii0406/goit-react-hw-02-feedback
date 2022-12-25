import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button className={css.btn} type="button" onClick={onLeaveFeedback}>Good</button>
      <button className={css.btn} type="button" onClick={onLeaveFeedback}>Neutral</button>
      <button className={css.btn} type="button" onClick={onLeaveFeedback}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired,),
};


export default FeedbackOptions;