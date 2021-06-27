import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from './styled-components';

export default class Select extends Component {
	render() {
		const { value, options, onChange, style } = this.props;

		return (
			<Styled.Select
				value={value}
				style={style ? style : {}}
				onChange={ev => onChange(ev.target.value)}
			>
				{options.map(option => (
					<option value={option.value} selected={option.value === value}>
						{option.label}
					</option>
				))}
			</Styled.Select>
		);
	}
}

Select.propTypes = {
	style: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	value: PropTypes.any.isRequired,
};
