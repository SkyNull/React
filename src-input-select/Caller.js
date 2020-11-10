import React from 'react';
import Select from './Select';

const optionsArry = [
  {
    key: 'time_desc',
    value: 'time_desc',
    label: '时间从近到远',
    custom: '时间',
  }, {
    key: 'time_asc',
    value: 'time_asc',
    label: '时间从远到近',
    custom: '时间',
  }, {
    key: 'priority_desc',
    value: 'priority_desc',
    label: '优先级从高到低',
    custom: '优先级',
  }, {
    key: 'priority_asc',
    value: 'priority_asc',
    label: '优先级从低到高',
    custom: '优先级',
  },
];

class Caller extends React.Component {
  constructor() {
    super();

    this.state = {
      valueSelected: 'priority_desc',
    };
  }

  handleValueChange = (option) => {
    this.setState({
      valueSelected: option.value,
    });
  }

  render() {
    const { valueSelected } = this.state;
    return (
      <Select
        options={optionsArry}
        // defaultValue="priority_desc"
        value={valueSelected}
        onChange={this.handleValueChange}
      />
    )
  }
}

export default Caller;