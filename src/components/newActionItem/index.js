import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import Styled from '../styled/action';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
const isActionItemCanBeDropped = (coordinates, canvasRect) => {
	if (
		coordinates.y > canvasRect.top &&
		coordinates.y < canvasRect.bottom &&
		coordinates.x > canvasRect.left &&
		coordinates.x < canvasRect.right
	)
		return true;
	return false;
};

export default class NewActionItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDroppable: false,
			icon: this.props.icon,
		};
		const elementContainer = document.createElement('div');
		document.body.appendChild(elementContainer);
		this.elementContainer = elementContainer;

		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
	}

	mouseLocationX = null;
	mouseLocationY = null;
	updateCoordinates = (deltaX, deltaY) => {
		this.props.updateCoordinates({
			y: this.props.coordinates.y + deltaY,
			x: this.props.coordinates.x + deltaX,
		});
	};

	onMouseMove = event => {
		if (!this.mouseLocationX && !this.mouseLocationY) {
			this.updateMouseLocation(event.screenX, event.screenY);
			return;
		}
		const deltaX = event.screenX - this.mouseLocationX;
		const deltaY = event.screenY - this.mouseLocationY;
		this.setState({
			isDroppable: isActionItemCanBeDropped(this.props.coordinates, this.props.canvasBoundingRect),
		});
		this.updateMouseLocation(event.screenX, event.screenY);
		this.updateCoordinates(deltaX, deltaY);
	};

	onMouseUp = () => {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);

		if (this.state.isDroppable) {
			this.props.addNewActionToCanvas();
			return;
		}
		this.props.removeNewAction();
	};

	updateMouseLocation = (x, y) => {
		this.mouseLocationX = x;
		this.mouseLocationY = y;
	};
	render() {
		const { coordinates } = this.props;
		return createPortal(
			<Styled.Container
				isDragging
				isDroppable={this.state.isDroppable}
				style={{
					transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
				}}
			>
				<Styled.IconContainer isDragging isDroppable={this.state.isDroppable}>
					<Image src={this.state.icon} />
				</Styled.IconContainer>
			</Styled.Container>,
			this.elementContainer
		);
	}
}

NewActionItem.propTypes = {
	// iconSource: PropTypes.string.isRequired
	addNewActionToCanvas: PropTypes.func.isRequired,
	removeNewAction: PropTypes.func.isRequired,
	canvasBoundingRect: PropTypes.object.isRequired,
	updateCoordinates: PropTypes.func.isRequired,
};
