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
    { wrapperGraphApp: attrs.wrapperGraphApp },
    { wrapperGraphs: attrs.wrapperGraphs },
    { wrapperGraphData: attrs.wrapperGraphData },
    { wrapperChips: attrs.wrapperChips },
    // { innerChips: attrs.innerChips },
    { wrapperControl: attrs.wrapperControl },
    { wrapperTimer: attrs.wrapperTimer },
    { victoryChart: attrs.victoryChart }

  );

  return (
    <Tag className={classes} {...attrs} />
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