import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.less';

class Checkbox extends React.Component {

	static propTypes = {
		defaultChecked: PropTypes.bool,
		checked: PropTypes.bool,
		disabled: PropTypes.bool,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		defaultChecked: true,
		checked: undefined,
		disabled: false,
		onChange: undefined,
	};

	constructor(props) {
		super(props);

		this.state = {
			checked: props.defaultChecked,
		};
	}

	static getDerivedStateFromProps(props) {
		const { checked: controlled } = props;
		const result = controlled === undefined ? null : {checked: controlled}

		return result;
	}

	handleChange = (event) => {
		const { onChange, checked: controlled } = this.props;
		const { checked } = event.target;

		if (onChange) {
			onChange(checked);
		}

		if (!controlled) {
			this.setState({ checked });
		}
	}

	render() {
		const { checked } = this.state;
		const { disabled } = this.props;
		return(
			<div className="checkbox">
				<span className="checkbox-input">
					<input
						type="checkbox"
						checked={checked}
						disabled={disabled}
						onChange={this.handleChange}
					/>
				</span>
				<span className="checkout-label">Checkbox</span>
			</div>         
		)
	}		
}

export default Checkbox;