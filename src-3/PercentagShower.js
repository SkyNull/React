import React, { Component } from 'react';

class PercentagShower extends Component {
  // constructor(props) {
  //   console.log(props, 'props');
  //   super(props);
  // }
  render() {
    return (
      <div>
        {this.props.percentagNum}
      </div>
    )
  }
}
export default PercentagShower;