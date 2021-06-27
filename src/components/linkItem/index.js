import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from './styled-components';
import getSvgPolylineFromLinkVector from '../../helpers/get-svg-polyline-from-link-coordinates';
import getLinkVectorFromCoordinates from '../../helpers/get-link-vector-from-coordinates';
import { Image } from 'react-bootstrap';
export default class LinkItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isInitialMouseUpCalled: false,
		};

		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
	}

	mouseLocationX = null;
	mouseLocationY = null;

	onMouseMove = event => {
		if (!this.mouseLocationX && !this.mouseLocationY) {
			this.updateMouseLocation(event.screenX, event.screenY);
			return;
		}
		const deltaX = event.screenX - this.mouseLocationX;
		const deltaY = event.screenY - this.mouseLocationY;

		this.updateMouseLocation(event.screenX, event.screenY);
		this.updateEndCoordinates(deltaX, deltaY);
	};

	updateEndCoordinates = (deltaX, deltaY) => {
		this.props.updateEndCoordinates({
			x: this.props.endCoordinates.x + deltaX,
			y: this.props.endCoordinates.y + deltaY,
		});
	};

	onMouseUp = () => {
		if (this.state.isInitialMouseUpCalled) return;
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);

		this.props.onInitialMouseUp();
		this.setState({ isInitialMouseUpCalled: true });
	};

	updateMouseLocation = (x, y) => {
		this.mouseLocationX = x;
		this.mouseLocationY = y;
	};

	get dynamicStyles() {
		const { startCoordinates, endCoordinates } = this.props;

		const deltaX = endCoordinates.x - startCoordinates.x;
		const deltaY = endCoordinates.y - startCoordinates.y;

		const x = deltaX > 0 ? startCoordinates.x : endCoordinates.x;
		const y = deltaY > 0 ? startCoordinates.y : endCoordinates.y;

		const width = deltaX > 0 ? deltaX : -1 * deltaX;
		const height = deltaY > 0 ? deltaY : -1 * deltaY;

		return {
			container: {
				transform: `translate(${x}px, ${y}px)`,
				width,
				height,
			},
			svg: {
				width,
				height,
			},
		};
	}

	render() {
		const { startCoordinates, endCoordinates, removeLink } = this.props;
		const { dynamicStyles } = this;
		return (
			<Styled.Container style={dynamicStyles.container}>
				<Styled.CloseIconContainer style={dynamicStyles.closeIcon}>
					<Image onClick={removeLink} src="/icon/delete.png" />
					{/* <Styled.CloseIcon onClick={removeLink} /> */}
				</Styled.CloseIconContainer>
				<Styled.Svg style={dynamicStyles.svg} xmlns='http://www.w3.org/2000/svg'>
					<polyline
						strokeWidth='2'
						stroke='#000'
						strokeLinecap='round'
						fill='none'
						points={getSvgPolylineFromLinkVector(
							getLinkVectorFromCoordinates(startCoordinates, endCoordinates)
						)}
					/>
				</Styled.Svg>
			</Styled.Container>
		);
	}
}

LinkItem.propTypes = {
	endCoordinates: PropTypes.object.isRequired,
	onInitialMouseUp: PropTypes.func.isRequired,
	removeLink: PropTypes.func.isRequired,
	startCoordinates: PropTypes.object.isRequired,
	updateEndCoordinates: PropTypes.func.isRequired,
};
