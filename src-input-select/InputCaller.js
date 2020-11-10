import React from 'react';
import Input from './Input';

class InputCaller extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '我是小仙女',
    };
  }
  handleValueChange = (content) => {
    console.log(content, 'content');
    this.setState({ content });
  }

  render() {
    const { content } = this.state;
    return(     
      <Input value={content} onChange={this.handleValueChange}/>
    )
  }
}

export default InputCaller;