import React from 'react';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }

  render() {
    // console.log('this is props image', this.props.images)
    const otherImages = this.props.images.slice(1);
    return (
      <div className='carouselContainer' >
        {this.props.images.length === 0 ? '' : <img src={`${this.props.images[0].imageUrl}`} className='firstImageContainer' />}
        {otherImages.map(image => (
          <img src={`${image.imageUrl}`} className='imageContainer' onClick={this.props.renderImage} />
        ))}
      </div>
    );
  }
}

export default Images;
