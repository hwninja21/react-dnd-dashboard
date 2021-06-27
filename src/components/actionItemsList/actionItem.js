import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Styled from '../styled/action';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';


export default class ActionItem extends Component {
	onMouseDown = () => {
		const rect = findDOMNode(this.iconContainerRef).getBoundingClientRect();
		this.props.onMouseDown({ y: rect.top, x: rect.left, icon: this.props.icon });
	};

	render() {
		const { label } = this.props;
		const { icon } = this.props;
		return (

			<Styled.Container isListItem onMouseDown={this.onMouseDown}>
				<Styled.IconContainer ref={instance => (this.iconContainerRef = instance)}>
					<Image src={icon} />
				</Styled.IconContainer>
				<Styled.Text>{label}</Styled.Text>
			</Styled.Container>
		);
	}
}

ActionItem.propTypes = {
	//iconSource: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	onMouseDown: PropTypes.func.isRequired,
};
