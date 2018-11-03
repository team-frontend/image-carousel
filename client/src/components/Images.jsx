import React from 'react';
// import { url } from 'inspector';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  render() {
    // console.log('this is props image', this.props.images);
    const otherImages = this.props.images.slice(1);
    let imageCount = 0; //have to use let instead of const. const cannot increment for some reason
    return (
      <div className="carouselContainer">
        {this.props.images.length === 0 ? '' : <img src={`${this.props.images[0].imageUrl}`} className="firstImageContainer" id={imageCount} onClick={this.props.renderImage} />}
        {otherImages.map((image, index) => (
          <img key={index} src={`${image.imageUrl}`} className="imageContainer" id={imageCount += 1} onClick={this.props.renderImage} />
        ))}
      </div>
    );
  }
}

export default Images;
