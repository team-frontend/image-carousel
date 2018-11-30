import React from 'react';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';
import Carousel from './Carousel.jsx';
import SlideShow from './SlideShow.jsx';

const stringPxToNum = (string) => {
  const num = string.split('px');
  return Number(num[0]);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
      toggle: false,
      image: [],
      viewStyle: {
        position: 'relative',
        right: '0px',
      },
      carouselStyle: {
        overflow: 'hidden',
        maxWidth: '1629.45px',
      },
    };
    this.renderImage = this.renderImage.bind(this);
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
  }

  componentDidMount() {
    fetch('api/homes/1')
      .then(res => res.json())
      .then((res) =>{
        console.log(res)
        this.setState({
          images: [res.rows[0].imageUrl]
        })
      })
      .catch(() => console.log('Error'));
  }

  goBack() {
    if (this.state.toggle) { 
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        image: this.state.images[this.state.currentIndex - 1].imageUrl,
      });
    } else if (this.state.toggle === false && (stringPxToNum(this.state.viewStyle.right) > 0)) {
      this.setState({
        viewStyle: {
          position: 'relative',
          right: stringPxToNum(this.state.viewStyle.right) - 274.91 + 'px'
        },
      });
    }
  }

  goForward() {
    if (this.state.toggle) {
      this.setState({
        currentIndex: Number(this.state.currentIndex) + 1,
        image: this.state.images[Number(this.state.currentIndex) + 1].imageUrl,
      });
    } else if (this.state.toggle === false && (stringPxToNum(this.state.viewStyle.right) < 1373)) { 
      this.setState({
        viewStyle: {
          position: 'relative',
          right: stringPxToNum(this.state.viewStyle.right) + 274.91 + 'px'
        },
      });
    }
  }

  renderImage(e) {
    const { toggle, images } = this.state;
    if (!toggle) {
      this.setState({
        image: [e.target.src],
        currentIndex: e.target.id,
        toggle: true,
        carouselStyle: {
          overflow: 'visible',
          maxWidth: '1629.45px',
        },
      });
    } else if (toggle) {
      this.setState({
        images: this.state.images,
        images,
        toggle: false,
        carouselStyle: {
          overflow: 'hidden',
          maxWidth: '1629.45px',
        },
      });
    }
  }

  renderSelectedImage() {
    const { image } = this.state;
    return (
      <SlideShow image={image} renderImage={this.renderImage} />
    );
  }

  renderCarousel() {
    const { images } = this.state;
    return (
      <Carousel images={images} renderImage={this.renderImage} />
    );
  }

  render() {
    return (
      <div style={this.state.carouselStyle}>
        <LeftArrow goBack={this.goBack} />
        <RightArrow goForward={this.goForward} />
        <div style={this.state.viewStyle}>
          {this.state.toggle ? this.renderSelectedImage() : this.renderCarousel()}
        </div>
      </div>
    );
  }
}

export default App;
