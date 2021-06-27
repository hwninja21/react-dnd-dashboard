import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledText from 'components/styled/text';
import Styled from './styled-components.js';

export default class OrText extends Component {
	render() {
		const { leftText, rightText } = this.props;
		return (
			<Styled.Container>
				<StyledText.Normal>{leftText}</StyledText.Normal>
				<Styled.Line />
				<Styled.OrText>OR</Styled.OrText>
				<Styled.Line />
				<StyledText.Normal>{rightText}</StyledText.Normal>
			</Styled.Container>
		);
	}
}

OrText.propTypes = {
	leftText: PropTypes.string.isRequired,
	rightText: PropTypes.string.isRequired,
};
