import CanvasActionItem from '../canvasActionItem';
import LinkItem from '../linkItem';
import {
	addAction,
	appendNewAction,
	createLink,
	removeAction,
	removeLink,
	removeNewAction,
	setActionOutputLink,
	updateAction,
	updateLinkCoordinates,
	updateNewAction,
} from '../../actions/canvas';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Styled from './styled-components';
import NewActionItem from '../newActionItem';
import { connect } from 'react-redux';
import actionsData from '../../data';
import styles from './mystylepreview.module.css';
import { findDOMNode } from 'react-dom';
import { getLinks } from './selectors';
import { ICON_SIZE } from '../../styled-components';
import { Image } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

const isCoordinatesInsideActionRect = (coordinates, actionCoordinates) => {
	if (
		coordinates.x > actionCoordinates.x &&
		coordinates.x < actionCoordinates.x + ICON_SIZE &&
		coordinates.y > actionCoordinates.y &&
		coordinates.y < actionCoordinates.y + ICON_SIZE
	)
		return true;
	return false;
};

class Canvas extends Component {
	state = {
		scale: 1,
		scrollPosition: {
			x: 0,
			y: 0,
		},
		boundingRect: {
			bottom: 0,
			left: 0,
			right: 0,
			top: 0,
		},
	};

	toggleSide() {
		var sidemenu = document.getElementById("sidecontent");
		if (sidemenu.style.display == "none") {
			sidemenu.style.display = "inline-block";
		} else {
			sidemenu.style.display = "none";
		}
	}
	componentDidMount() {
		const rect = findDOMNode(this).getBoundingClientRect();
		this.setState({
			boundingRect: {
				bottom: rect.bottom,
				left: rect.left,
				right: rect.right,
				top: rect.top,
			},
		});
	}

	appendNewAction = () => this.props.appendNewAction(this.state);

	updateNewActionCoordinates = coordinates => this.props.updateNewAction({ coordinates });

	onLinkMouseUp = (coordinates, actionId) => {
		const { actionsIds, actions } = this.props;
		for (let i = 0; i < actionsIds.length; i++) {
			const actionToLink = actions[actionsIds[i]];
			if (
				actionToLink.inputLink !== null ||
				actionToLink.outputLink === actionId ||
				!actionsData[actionToLink.dataId].inputLinkEnabled
			)
				continue;
			const canBeDropped = isCoordinatesInsideActionRect(coordinates, actionToLink.coordinates);

			if (canBeDropped) {
				this.props.setActionOutputLink(actionId, actionsIds[i]);
				return;
			}
		}
		this.props.removeLink(actionId);
	};

	onLinkMouseDown = actionId => {
		const action = this.props.actions[actionId];
		if (action.outputLink) return;
		this.props.createLink(actionId);
	};

	onScroll = ev =>
		this.setState({
			scrollPosition: {
				x: ev.target.scrollLeft,
				y: ev.target.scrollTop,
			},
		});

	render() {
		const { actions, actionsIds, newAction, removeLink, removeAction } = this.props;
		return (
			<Styled.Container onScroll={this.onScroll}>
						<Styled.CanvasDiv scale={this.state.scale}>
							{this.props.links.map((link, index) => (
								<LinkItem
									key={link.actionId}
									endCoordinates={link.endCoordinates}
									startCoordinates={link.startCoordinates}
									onInitialMouseUp={() => this.onLinkMouseUp(link.endCoordinates, link.actionId)}
									removeLink={() => removeLink(link.actionId)}
									updateEndCoordinates={coordinates =>
										this.props.updateLinkCoordinates(coordinates, link.actionId)
									}
								/>
							))}
							{actionsIds.map(actionId => (
								<CanvasActionItem
									coordinates={actions[actionId].coordinates}
									id={actionId}
									key={actionId}
									icon={actionsData[actions[actionId].dataId].icon}
									label={actionsData[actions[actionId].dataId].label}
									onClick={() => this.props.onActionItemClick(actionId)}
									onLinkMouseDown={() => this.onLinkMouseDown(actionId)}
									outputLink={actions[actionId].outputLink}
									outputLinkEnabled={actionsData[actions[actionId].dataId].outputLinkEnabled}
									inputLinkEnabled={actionsData[actions[actionId].dataId].outputLinkEnabled}
									inputLink={actions[actionId].inputLink}
									updateAction={data => this.props.updateAction(actionId, data)}
									removeAction={() => removeAction(actionId)}
								/>
							))}
						</Styled.CanvasDiv>
				{newAction && (
					<NewActionItem
						addNewActionToCanvas={this.appendNewAction}
						canvasBoundingRect={this.state.boundingRect}
						coordinates={newAction.coordinates}
						icon={newAction.coordinates.icon}
						removeNewAction={this.props.removeNewAction}
						updateCoordinates={this.updateNewActionCoordinates}
					/>
				)}
				<div className={styles.sidemenu} id="sidemenu">
					<div onClick={this.toggleSide} variant="light" className={styles.sidebutton}>
						<Image src="/icon/checklist.png" style={{ width: "100%", height: "100%" }} rounded />
					</div>
					<div className={styles.sidecontent} id="sidecontent">
						<p><i class="fa fa-check" style={{ fontSize: "25px", color: "#6fb2ff", paddingRight: "10px" }}></i>Drag input DataSet action</p>
						<p><i class="fa fa-check" style={{ fontSize: "25px", color: "#6fb2ff", paddingRight: "10px" }}></i>Drag any action</p>
						<p><i class="fa fa-minus" style={{ fontSize: "25px", color: "#dadada", paddingRight: "10px" }}></i>Draw Connection lines between actions</p>
						<p><i class="fa fa-minus" style={{ fontSize: "25px", color: "#dadada", paddingRight: "10px" }}></i>Configure the action</p>
						<p><i class="fa fa-minus" style={{ fontSize: "25px", color: "#dadada", paddingRight: "10px" }}></i>Drag output DataSet action</p>
						<p><i class="fa fa-minus" style={{ fontSize: "25px", color: "#dadada", paddingRight: "10px" }}></i>Name and save your DataFlow</p>
					</div>
				</div>
				<div className={styles.zoom}>
					<div className={styles.zoomitem}>
						<Image src="/icon/plus.png" style={{ width: "100%", height: "100%" }} rounded />
					</div>
					<div className={styles.zoomitem}>
						<Image src="/icon/minus.png" style={{ width: "100%", height: "100%" }} rounded />
					</div>
				</div>
			</Styled.Container>
		);
	}
}

const mapStateToProps = state => ({
	newAction: state.canvas.newAction,
	actionsIds: Object.keys(state.canvas.actions),
	actions: state.canvas.actions,
	links: getLinks(state),
});

const mapDispatchToProps = {
	addAction,
	appendNewAction,
	createLink,
	removeAction,
	removeLink,
	removeNewAction,
	setActionOutputLink,
	updateAction,
	updateLinkCoordinates,
	updateNewAction,
};

Canvas.propTypes = {
	actions: PropTypes.object.isRequired,
	actionsIds: PropTypes.array.isRequired,
	addAction: PropTypes.func.isRequired,
	appendNewAction: PropTypes.func.isRequired,
	createLink: PropTypes.func.isRequired,
	newAction: PropTypes.object,
	onActionItemClick: PropTypes.func.isRequired,
	removeAction: PropTypes.func.isRequired,
	removeLink: PropTypes.func.isRequired,
	removeNewAction: PropTypes.func.isRequired,
	setActionOutputLink: PropTypes.func.isRequired,
	updateAction: PropTypes.func.isRequired,
	updateNewAction: PropTypes.func.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Canvas);
