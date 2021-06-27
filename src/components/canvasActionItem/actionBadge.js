import React, { Component } from 'react';
import Styled from '../styled/action';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
export default class ActionBadge extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggle: true };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = (a) => {
		
		if(a=='delete'){
			alert(a);
		}
	}
	render() {
		const { location } = this.props;
		const { icon } = this.props;
		const { type } = this.props;
		return (
			<Styled.ActionBadgeContainer location={location}>
				<Image onClick={() => this.handleClick(type)} src={icon} style={{ width: "15px", height: "15px" }} />
			</Styled.ActionBadgeContainer>
		);
	}
}

ActionBadge.propTypes = {
	// iconSource: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	location: PropTypes.string.isRequired
};
