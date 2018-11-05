import React from 'react';
import rightArrowStyle from './RightArrow.css';

const RightArrow = props => (
  <span className={rightArrowStyle.rightArrowBlock} onClick={props.goForward}>
    <i className="fas fa-angle-right" id={rightArrowStyle.right}/>
  </span>
);

export default RightArrow;
