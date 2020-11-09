import React from 'react';
import Select from './Select';

const optionsArry = [
  {
    key: 'time_desc',
    value: '时间从近到远',
    label: '时间',
  }, {
    key: 'time_asc',
    value: '时间从远到近',
    label: '时间',
  }, {
    key: 'priority_desc',
    value: '优先级从高到低',
    label: '优先级',
  }, {
    key: 'priority_asc',
    value: '优先级从低到高',
    label: '优先级',
  },
];

class Caller extends React.Component {
  constructor() {
    super();

    this.state = {
      valueSelected: '优先级从高到低',
    };
  }

  handleValueChange = (option) => {
    console.log(option, '子返回的option');
    this.setState({
      valueSelected: option.value,
    });
  }

  render() {
    const { valueSelected } = this.state;
    return (
      <Select
        options={optionsArry}
        value={valueSelected}
        onChange={this.handleValueChange}
      />
    )
  }
}

export default Caller;