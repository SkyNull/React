import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    defaultValue: '',
    value: undefined,
    onChange: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.defaultValue,
    };
  }

  static getDerivedStateFromProps(props) {
    const result = props.value === undefined ? null : { value: props.value };
    
    return result;
  }

  handleChange = (e) => {
    const { onChange, value: valueControlled } = this.props;
    const { value } = e.target;

    if (onChange) {
      onChange(value);
    }

    if (valueControlled === undefined) {
      this.setState({ value });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <input value={value} onChange={this.handleChange}/>
    );
  }
}

export default Input