import React from 'react';

const LeftArrow = props => (
  <span className="leftArrowBlock" onClick={props.goBack}>
    <i className="fas fa-angle-left" />
  </span>
);

export default LeftArrow;
