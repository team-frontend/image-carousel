import React from 'react';

const LeftArrow = props => (
  <span onClick={props.goBack}>
    <i className="fas fa-arrow-left" />
  </span>
);

export default LeftArrow;
