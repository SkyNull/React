import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
    }
  }

  handleNum = (e) => {
    const num = e.target.value;
    console.log(num);
    this.setState({ num });

    if(this.props.onHandleNumber) {
      const { num } = this.state;
      this.props.onHandleNumber({num});
    }
  }

  render() {
    const { num } = this.state;
    return (
      <input
        placeholder="请输入目标值"
        value={num}
        onChange={this.handleNum}
        type='Number'
      />
    )
  }
}

export default Input;