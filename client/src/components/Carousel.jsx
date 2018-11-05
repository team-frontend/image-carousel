import React from 'react';
import carouselStyle from './Carousel.css';
// import { url } from 'inspector';

const Carousel = (props) => {
  const otherImages = props.images.slice(1);
  let imageCount = 0; //have to use let instead of const. const cannot increment for some reason
  return (
    <div className={carouselStyle.carouselContainer}> 
      {props.images.length === 0 ? '' : <img src={`${props.images[0].imageUrl}`} className={carouselStyle.firstImageContainer} id={imageCount} onClick={props.renderImage} />}
      {otherImages.map((image, index) => (
        <img key={index} src={`${image.imageUrl}`} className={carouselStyle.imageContainer} id={imageCount += 1} onClick={props.renderImage} />
      ))}
    </div>
  );
};

export default Carousel;
