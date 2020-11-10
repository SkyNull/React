import React from 'react';
import Checkbox from './Checkbox';

class CheckboxCaller extends React.Component {

	constructor() {
		super();
		this.state = {
			checked: true,
		};
	}

	handleCheckboxChange = (value) => {
		this.setState({
			checked: value,
		});
	}
	render() {
		const { checked } = this.state;
		// checked={checked}  defaultChecked={true}
		return(
			<Checkbox 
				onChange={this.handleCheckboxChange}
				checked={checked}
				disabled={true}
			/>
		);
	}
}

export default CheckboxCaller;