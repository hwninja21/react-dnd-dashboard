import { ICON_SIZE } from '../../styled-components';

export const getLinks = state => {
	const { actions } = state.canvas;
	const actionsIds = Object.keys(actions);
	return actionsIds
		.filter(id => actions[id].outputLink)
		.map(id => {
			const link = {};
			link.actionId = id;
			link.startCoordinates = {
				x: actions[id].coordinates.x + ICON_SIZE,
				y: actions[id].coordinates.y + ICON_SIZE / 2,
			};
			if (typeof actions[id].outputLink === 'string') {
				const outputLink = actions[id].outputLink;
				link.endCoordinates = {
					x: actions[outputLink].coordinates.x,
					y: actions[outputLink].coordinates.y + ICON_SIZE / 2,
				};
			} else {
				link.endCoordinates = actions[id].outputLink.coordinates;
			}
			return link;
		});
};
