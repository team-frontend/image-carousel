import React from 'react';

const RightArrow = props => (
  <span onClick={props.goForward}>
    <i className="fas fa-arrow-right" />
  </span>
);

export default RightArrow;
