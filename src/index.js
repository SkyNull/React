import React from 'react';
import ReactDOM from 'react-dom';
import Caller from './Caller';
import Input from './Input';

function Controlled() {
  const [value, setValue] = React.useState('初始值');
  return <Input value={value} onChange={setValue}/>;
}

function Uncontrolled() {
  return <Input defaultValue="初始值" />
}

ReactDOM.render(
  <>
    <div style={{ marginBottom: '8px' }}>
      <label style={{ width: '100px', display: 'inline-block' }}>Uncontrolled</label>
      <Uncontrolled />
    </div>
    <div>
      <label style={{ width: '100px', display: 'inline-block' }}>Controlled</label>
      <Controlled />
    </div>
  </>,
  document.getElementById('root')
)