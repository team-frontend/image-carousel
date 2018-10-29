import React from 'react';
import Arrow from './Arrow.jsx';
import Image from './Image.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: true,
    };
  }

  render() {
    return (
      <div>
        <Arrow direction={this.state.direction} />
        <Image />
        <Arrow direction={!this.state.direction} />
      </div>
    );
  }
}

export default Carousel;
