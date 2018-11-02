import React from 'react';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';
import Images from './Images.jsx';
import Image from './Image.jsx';
import { relative } from 'path';

const stringPxToNum = (string) => {
  let num = string.split('px');
  return Number(num[0]);
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
      toggle: false,
      image: [],
      viewStyle : {
        position: "relative",
        right: "0px"
      },
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

  goBack() {
    console.log('clicked back, the image id before this is ', this.state.currentIndex - 1);
    console.log('this is previous image url', this.state.images[this.state.currentIndex - 1].imageUrl);
    if (this.state.toggle) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        image: this.state.images[this.state.currentIndex - 1].imageUrl,
      });
    } else {
      this.setState({
        viewStyle: {
          position: "relative",
          right: stringPxToNum(this.state.viewStyle.right) - 100 + "px"
        },
      });
    }
    // need to do if else to check if carousel or selected image is shown. If carousel, the arrows need to move differently than if 1 image
  }

  goForward() {
    console.log('clicked forward, the image id after this is ', Number(this.state.currentIndex) + 1) // why need to invoke number on this.state.currentIndex? it adds as string when not
    if (this.state.toggle) {
      this.setState({
        currentIndex: Number(this.state.currentIndex) + 1,
        image: this.state.images[Number(this.state.currentIndex) + 1].imageUrl,
      });
    } else {
      this.setState({
        viewStyle: {
          position: "relative",
          right: stringPxToNum(this.state.viewStyle.right) + 100 + "px"
        },
      });
      // console.log(stringPxToNum(this.state.viewStyle.right) + 100 + "px")
    }
    // need to do if else to check if carousel or selected image is shown. If carousel, the arrows need to move differently than if 1 image
  }

  renderImage(e) {
    // console.log('this is the target src', e.target.src)
    if (!this.state.toggle) {
      this.setState({
        image: [e.target.src],
        currentIndex: e.target.id,
        toggle: true,
      });
    } else if (this.state.toggle) {
      this.setState({
        images: this.state.images,
        toggle: false,
      });
    }
  }

  renderSelectedImage() {
    return (
      <Image image={this.state.image} renderImage={this.renderImage} />
    );
  }

  renderCarousel() {
    return (
      <Images images={this.state.images} renderImage={this.renderImage} />
    );
  }


  render() {
    console.log('this is images state', this.state.images);
    console.log('this is image state', this.state.image)
    console.log('this is viewStyle', this.state.viewStyle)
    return (
      <div>
          <LeftArrow goBack={this.goBack} />
          <RightArrow goForward={this.goForward} />
        <div style={this.state.viewStyle}>
          {this.state.toggle ? this.renderSelectedImage(): this.renderCarousel()}
          {/* <Image image={this.state.image} />
          <Images images={this.state.images} renderImage={this.renderImage} /> */}
        </div>
      </div>
    );
  }
}

export default Carousel;
