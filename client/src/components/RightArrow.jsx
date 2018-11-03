import React from 'react';

const RightArrow = props => (
  <span className="rightArrowBlock" onClick={props.goForward}>
    <i className="fas fa-angle-right" />
  </span>
);

export default RightArrow;
