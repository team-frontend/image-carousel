import React from 'react';

const Image = (props) => (
  <div onClick={props.renderImage}>
    <img src={`${props.image}`} className="selectedImage" />
  </div>
);

export default Image;
