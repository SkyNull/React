import React from 'react';
import PropTypes from 'prop-types';

// class Input extends React.Component {
//   static propTypes = {
//     defaultValue: PropTypes.string,
//     value: PropTypes.string,
//     onChange: PropTypes.func,
//   };

//   static defaultProps = {
//     defaultValue: '',
//     value: undefined,
//     onChange: undefined,
//   };

//   constructor(props) {
//     super(props);

//     this.state = {
//       value: this.props.defaultValue,
//     };
//   }

//   static getDerivedStateFromProps(props) {
//     const result = props.value === undefined ? null : { value: props.value };
    
//     return result;
//   }

//   handleChange = (e) => {
//     const { onChange, value: valueControlled } = this.props;
//     const { value } = e.target;

//     if (onChange) {
//       onChange(value);
//     }

//     if (valueControlled === undefined) {
//       this.setState({ value });
//     }
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <input value={value} onChange={this.handleChange}/>
//     );
//   }
// }

// 自我练习
class Input extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    defaultValue: '',
    value: undefined,  //value赋予undefined是为了到后面区分用户采用的是受控模式还是非受控模式；
    onChange: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      valueContent: this.props.defaultValue,
    }
  }

  static getDerivedStateFromProps(props) {
    const result = props.value === undefined ? null : { valueContent: props.value };
    
    return result;
  }

  handleChange = (e) => {
    const { onChange, value } = this.props;
    const { value: valueInput } = e.target;
    console.log(valueInput, 'valueInput');

    if(onChange) {
      onChange(valueInput);
    }

    if (!value) {
      this.setState({
        valueContent: valueInput,
      });
    }
  }

  render() {
    const { valueContent } = this.state;
    return <input value={valueContent} onChange={this.handleChange}/>
  }
}

export default Input