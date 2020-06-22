import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './Card.css';

const Card = ({
  className,
  tag: Tag,
  ...attrs

}) => {

  const classes = classNames(
    className,
    { CardGraphApp: attrs.CardGraphApp },
    { wrapperGraphs: attrs.wrapperGraphs },
    { wrapperData: attrs.wrapperData },
    { DataInput: attrs.DataInput },
    { wrapperArticle: attrs.wrapperArticle },

  );

  return (
    <Tag className={classes} {...attrs}  />
  
  );
};

Card.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
Card.defaultProps = {
  className: '',
  tag: 'div',
};

export default Card;