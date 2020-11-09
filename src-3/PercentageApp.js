import React, { Component } from 'react';
import Input from './Input';
import PercentagShower from './PercentagShower';

class PercentageApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentagNum: '',
    }
  }

  handlePercentagNumber = (value) => {
    const num = (parseFloat(value.num) * 100).toFixed(2)  + '%';
    console.log(num, '百分数');
    this.setState({
      percentagNum: num,
    })
  }

  render() {
    const { percentagNum } = this.state;
    return (
      <div>
        <Input onHandleNumber={this.handlePercentagNumber} />
        <PercentagShower percentagNum={percentagNum} />
      </div>
    )
  }
}

export default PercentageApp;
