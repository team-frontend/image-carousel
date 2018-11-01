import React from 'react';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';
import Images from './Images.jsx';
import Image from './Image.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
      toggle: false,
      test: false,
    };
    this.renderImage = this.renderImage.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  componentDidMount() {
    fetch('/images/:houseID')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          images: data,
        });
      })
      .catch(() => console.log('Error'));
  }

  //test if button works, need to refactor for actual functionality
  goBack() {
    this.setState({
      test: !this.state.test
    });
  }

  //test if button works, need to refactor for actual functionality
  goForward() {
    this.setState({
      test: !this.state.test
    });
  }

  //function that when image in images is clicked, the index of that clicked image is passed over, so that when you click left or right arrow, we know which image should show next
  imageIndex() {
    
  }

  //test to change image, should update image with clicked image and change back to carousel if clicked out of image
  renderImage(e) {
    console.log(e.target)
    if (!this.state.toggle) {
      this.setState({
        images: [{imageUrl: 'https://s3-us-west-1.amazonaws.com/zillowhouses/cliff-house-interior.jpg'}],
      });
    } else {
      
    }
    // return (
    //   <Image />
    // )
  }

  render() {
    console.log('this is test state', this.state.test);
    return (
      <div>
        <LeftArrow goBack={this.goBack} />
        {/* if toggle is false - show Image component with all images */}
        {/* else if toggle is true - show new Image component with clicked image */}
        {/* {this.state.toggle ? this.renderImage(): this.renderImages()} */}
        <Image />
        <Images images={this.state.images} renderImage={this.renderImage} />
        <RightArrow goForward={this.goForward} />
      </div>
    );
  }
}

export default Carousel;
