import React from 'react';
import slideShow from './SlideShow.css';

const SlideShow = (props) => (
  <div onClick={props.renderImage}>
    <img src={`${props.image}`} className={slideShow.selectedImage} />
  </div>
);

export default SlideShow;
