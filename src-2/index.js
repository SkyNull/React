import React from 'react';
import ReactDOM from 'react-dom';

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return ( < button onClick = {
        (e) => this.handleClick(e)
      } >
      Click me </button>
    );
  }
}

ReactDOM.render( <LoggingButton/>, document.getElementById('root'));

class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}> Click me </button>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    console.log(this, '111')

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this, 'this指向问题');
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick = {this.handleClick}> {this.state.isToggleOn ? 'ON' : 'OFF'} </button>
    );
  }
}

ReactDOM.render( <
  LoggingButton / > ,
  document.getElementById('root')
);

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'sss'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return ( 
      <form onSubmit = {
        this.handleSubmit
      }>
      <label>
        Name: <input type = "text" value={this.state.value} onChange={this.handleChange}/> 
      </label> 
      <input type = "submit" value = "Submit"/>
      </form>
    );
  }
}

ReactDOM.render( <NameForm/> , document.getElementById('root'));