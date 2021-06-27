import styled, { css } from 'styled-components';
import { ICON_SIZE } from '../../styled-components';

const Container = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	user-select: none;
	cursor: pointer;
	${props =>
		props.isListItem &&
		css`
			width: 100px;
			margin: 20px ;
			margin-top:10;
		`};
	${props =>
		props.isCanvasItem &&
		css`
			left: 0;
			width: 70px;
			overflow: visible;
			top: 0;
			position: absolute;
		`};
	${props =>
		props.isDragging &&
		css`
			left: 0;
			position: absolute;
			top: 0;
			z-index: 999;
			cursor: grabbing;
		`};
`;

const IconContainer = styled.div`
	background-color: white;
	position: relative;
	${props =>
		props.isDragging
			? props.isDroppable
				? css`
						background-color:white ;
				  `
				: css`
						background-color: white;
				  `
			: ''};
	align-items: center;
	border-radius: 5px;
	border: 1px solid black;
	display: flex;
	height: ${ICON_SIZE}px;
	justify-content: center;
	width: ${ICON_SIZE}px;
`;

const Text = styled.p`
	font-size: 16px;
	margin-top: 5px;
	width: 200px;
	text-align: center;
`;

const ACTION_BADGE_SIZE = 20;

const ActionBadgeContainer = styled.div`
	width: ${ACTION_BADGE_SIZE}px;
	height: ${ACTION_BADGE_SIZE}px;
	border-radius: ${ACTION_BADGE_SIZE / 2}px;
	border: 1px solid black;
	background-color: white;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	${props =>
		props.location === 'top-left' &&
		css`
			top: -${ACTION_BADGE_SIZE / 2}px;
			left: -${ACTION_BADGE_SIZE / 2}px;
		`};
	${props =>
		props.location === 'top-right' &&
		css`
			top: -${ACTION_BADGE_SIZE / 2}px;
			right: -${ACTION_BADGE_SIZE / 2}px;
		`};
	${props =>
		props.location === 'bottom-right' &&
		css`
			bottom: -${ACTION_BADGE_SIZE / 2}px;
			right: -${ACTION_BADGE_SIZE / 2}px;
		`};

	:hover {
		background-color: red;
	}
`;

const OUTPUT_LINK_SIZE = 10;

const OutputLink = styled.div`
	width: ${OUTPUT_LINK_SIZE}px;
	height: ${OUTPUT_LINK_SIZE}px;
	border-radius: ${OUTPUT_LINK_SIZE / 2}px;
	border: 1px solid black;
	background-color: white;
	position: absolute;
	top: ${(ICON_SIZE - OUTPUT_LINK_SIZE) / 2}px;
	right: -${OUTPUT_LINK_SIZE / 2}px;
	transition: 0.2s ease;

	:hover {
		border-width: 2px;
	}
`;
const Delete = styled.div`
	width: ${OUTPUT_LINK_SIZE + 10}px;
	height: ${OUTPUT_LINK_SIZE + 10}px;
	border-radius: ${OUTPUT_LINK_SIZE / 1}px;
	border: 1px solid black;
	background-color: white;
	position: absolute;
	top: -${(ICON_SIZE - OUTPUT_LINK_SIZE) / 6}px;
	right: -${OUTPUT_LINK_SIZE / 1}px;
	transition: 0.2s ease;

	:hover {
		border-width: 2px;
	}
`;
const Copy = styled.div`
	width: ${OUTPUT_LINK_SIZE + 10}px;
	height: ${OUTPUT_LINK_SIZE + 10}px;
	border-radius: ${OUTPUT_LINK_SIZE / 1}px;
	border: 1px solid black;
	background-color: white;
	position: absolute;
	top: ${(ICON_SIZE - OUTPUT_LINK_SIZE) / 1}px;
	right: -${OUTPUT_LINK_SIZE / 1}px;
	transition: 0.2s ease;

	:hover {
		border-width: 2px;
	}
`;
const Edit = styled.div`
	width: ${OUTPUT_LINK_SIZE + 10}px;
	height: ${OUTPUT_LINK_SIZE + 10}px;
	border-radius: ${OUTPUT_LINK_SIZE / 1}px;
	border: 1px solid black;
	background-color: white;
	position: absolute;
	top: -${(ICON_SIZE - OUTPUT_LINK_SIZE) / 6}px;
	right: ${OUTPUT_LINK_SIZE / 0.17}px;
	transition: 0.2s ease;

	:hover {
		border-width: 2px;
	}
`;

const InputLink = styled.div`
	width: ${OUTPUT_LINK_SIZE}px;
	height: ${OUTPUT_LINK_SIZE}px;
	border-radius: ${OUTPUT_LINK_SIZE / 10}px;
	border: 1px solid black;
	background-color: white;
	position: absolute;
	top: ${(ICON_SIZE - OUTPUT_LINK_SIZE) / 2}px;
	left: -${OUTPUT_LINK_SIZE / 2}px;
	transition: 0.2s ease;

	:hover {
		border-width: 2px;
	}
`;

export default {
	ActionBadgeContainer,
	Container,
	IconContainer,
	InputLink,
	OutputLink,
	Delete,
	Copy,
	Edit,
	Text,
};
