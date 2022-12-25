import PropTypes from 'prop-types';
import css from './Section';

const Section = ({title, children})=>(
<div className={css.container}>
  <h2>{title}</h2>
  <div>{children}</div>
</div>
);

Section.propTypes ={
    title: PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}

export default Section;