import React from 'react';

class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="pop" src="https://fritos.com/images/default-source/blue-bag-image/cheetos-crunchy-flamin-hot.png?sfvrsn=5651573a_2"/>
        <img className="pop" src="https://fritos.com/images/default-source/blue-bag-image/cheetos-crunchy-flamin-hot.png?sfvrsn=5651573a_2"/>
        <img className="pop" src="https://fritos.com/images/default-source/blue-bag-image/cheetos-crunchy-flamin-hot.png?sfvrsn=5651573a_2"/>
      </div>
    )
  }
}

export default Image;
