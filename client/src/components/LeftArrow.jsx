import React from 'react';
import leftArrowStyle from './LeftArrow.css';

const LeftArrow = props => (
  <span className={leftArrowStyle.leftArrowBlock} onClick={props.goBack}>
    <i className="fas fa-angle-left" id={leftArrowStyle.left} />
  </span>
);

export default LeftArrow;
