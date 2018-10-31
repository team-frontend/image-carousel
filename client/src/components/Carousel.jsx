import React from 'react';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';
import Image from './Image.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch('/images/:houseID')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          images: data,
        });
      })
      .catch(error => this.setState({
        error,
      }));
  }

  render() {
    return (
      <div>
        <LeftArrow />
        <Image images={this.state.images} />
        <RightArrow />
      </div>
    );
  }
}

export default Carousel;
