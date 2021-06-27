import ActionBadge from './actionBadge';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Styled from '../styled/action';
import { Image } from 'react-bootstrap';
import styles from 'react-bootstrap';
export default class CanvasActionItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isHovered: true,
			isLinkCreationRequested: false,
		};
	}

	mouseLocationX = null;
	mouseLocationY = null;

	updateActionCoordinates = (deltaX, deltaY) => {

		this.props.updateAction({
			coordinates: {
				y: this.props.coordinates.y + deltaY,
				x: this.props.coordinates.x + deltaX,
			},
		});
	};

	updateMouseLocation = (x, y) => {
		this.mouseLocationX = x;
		this.mouseLocationY = y;
	};

	onMouseDown = event => {
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
		this.updateMouseLocation(event.screenX, event.screenY);
	};

	onMouseMove = event => {
		const deltaX = event.screenX - this.mouseLocationX;
		const deltaY = event.screenY - this.mouseLocationY;
		this.updateMouseLocation(event.screenX, event.screenY);
		this.updateActionCoordinates(deltaX, deltaY);
	};

	onMouseUp = () => {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
		this.updateMouseLocation(null, null);
	};

	onMouseEnter = () => {
		if (this.state.isLinkCreationRequested) return;
		this.setState({ isHovered: true });
	};

	onMouseLeave = () => this.setState({ isHovered: false });

	onLinkMouseDown = event => {
		event.stopPropagation();
		this.props.onLinkMouseDown();
	};

	reMoveDown = event => {
		const deltaX = event.screenX - this.mouseLocationX;
		const deltaY = event.screenY - this.mouseLocationY;
		this.updateMouseLocation(event.screenX, event.screenY);
		this.updateActionCoordinates(1000, 1000);
	};

	render() {
		const { label, coordinates, outputLink, inputLink, outputLinkEnabled, icon, removeAction, inputLinkEnabled } = this.props;
		const { isHovered } = this.state;
		return (
			<Styled.Container
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				onMouseDown={this.onMouseDown}
				//onClick={this.props.onClick}
				isCanvasItem
				style={{
					transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
				}}
			>
				<Styled.IconContainer>
					<Image src={icon} />
					{isHovered && (
						<div>
							<Styled.Edit>
								<Image style={{ paddingBottom: "3px", paddingRight: "3px" }} src="/icon/co.png" />
							</Styled.Edit >
							<Styled.Delete onClick={removeAction}>
								<Image style={{ paddingBottom: "3px", paddingLeft: "1px" }} src="/icon/del.png" />
							</Styled.Delete >
							<Styled.Copy>
								<Image style={{ paddingBottom: "5px", paddingLeft: "1px" }} src="/icon/doc.png" />
							</Styled.Copy >
						</div>

						// <React.Fragment>
						// 	<ActionBadge onClick={removeAction} location='top-left' icon="/icon/co.png" type="co" />
						// 	<ActionBadge onClick={removeAction} location='top-right' icon="/icon/del.png" type="delete" />
						// 	<ActionBadge onClick={removeAction} location='bottom-right' icon="/icon/doc.png" tyle="doc" />
						// </React.Fragment>
					)}
					{(isHovered || outputLink) && outputLinkEnabled && (
						<Styled.OutputLink onMouseDown={this.onLinkMouseDown} />
					)}
					{(isHovered || inputLink) && inputLinkEnabled && (
						<Styled.InputLink />
					)}
				</Styled.IconContainer>
				<Styled.Text style={{ paddingTop: "10px" }}>{label}</Styled.Text>
			</Styled.Container>
		);
	}
}

CanvasActionItem.propTypes = {
	// iconSource: PropTypes.string.isRequired
	createLink: PropTypes.func.isRequired,
	inputLink: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	outputLink: PropTypes.string,
	outputLinkEnabled: PropTypes.bool.isRequired,
	updateAction: PropTypes.func.isRequired,
};
