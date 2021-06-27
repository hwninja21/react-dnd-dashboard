import React, { Component } from 'react';
import Styled from './styled-components';
import PropTypes from 'prop-types';

export default class Button extends Component {
	render() {
		const { onClick, label } = this.props;

		return (
			<Styled.Container onClick={onClick}>
				<Styled.Text>{label}</Styled.Text>
			</Styled.Container>
		);
	}
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
