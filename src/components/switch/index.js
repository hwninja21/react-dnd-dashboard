import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from './styled-components';
import StyledText from '../styled/text';

export default class Switch extends Component {
	render() {
		const { label, onChange, checked } = this.props;
		return (
			<Styled.Container>
				<StyledText.Normal>{label}</StyledText.Normal>
				<Styled.SwitchWrapper>
					<Styled.Checkbox onChange={onChange} checked={checked} />
					<Styled.Slider round={true} />
				</Styled.SwitchWrapper>
			</Styled.Container>
		);
	}
}

Switch.propTypes = {
	checked: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
