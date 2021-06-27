import {
	ADD_ACTION,
	APPEND_NEW_ACTION,
	CREATE_LINK,
	CREATE_NEW_ACTION,
	REMOVE_ACTION,
	REMOVE_LINK,
	REMOVE_NEW_ACTION,
	UPDATE_ACTION,
	UPDATE_LINK_COORDINATES,
	UPDATE_NEW_ACTION,
	SET_ACTION_OUTPUT_LINK,
} from '../actions/canvas';
import getActionFromNewAction from '../helpers/get-action-from-new-action';
import { ICON_SIZE } from '../styled-components';

const initialState = {
	actions: {},
	newAction: null,
};

const getActionsOnRemovingLink = (actionId, actions) => {
	const { outputLink } = actions[actionId];
	if (typeof outputLink === 'string') {
		return {
			...actions,
			[outputLink]: {
				...actions[outputLink],
				inputLink: null,
			},
			[actionId]: {
				...actions[actionId],
				outputLink: null,
			},
		};
	}
	return {
		...actions,
		[actionId]: {
			...actions[actionId],
			outputLink: null,
		},
	};
};

const getActionsOnSettingLink = (actionId, outputLink, actions) => ({
	...actions,
	[outputLink]: {
		...actions[outputLink],
		inputLink: actionId,
	},
	[actionId]: {
		...actions[actionId],
		outputLink,
	},
});

export default (state = initialState, reduxAction) => {
	switch (reduxAction.type) {
		case ADD_ACTION: {
			const { action } = reduxAction.payload;
			return {
				...state,
				actions: {
					...state.actions,
					[action.id]: action,
				},
			};
		}
		case UPDATE_ACTION: {
			const { id, data } = reduxAction.payload;
			return {
				...state,
				actions: {
					...state.actions,
					[id]: {
						...state.actions[id],
						...data,
					},
				},
			};
		}
		case REMOVE_ACTION: {
			const { id } = reduxAction.payload;
			const newActions = { ...state.actions };
			delete newActions[id];
			return {
				...state,
				actions: newActions,
			};
		}
		case CREATE_NEW_ACTION:
			return {
				...state,
				newAction: reduxAction.payload.action,
			};
		case APPEND_NEW_ACTION: {
			const actionToAppend = getActionFromNewAction(
				state.newAction,
				reduxAction.payload.canvasState
			);
			return {
				...state,
				actions: {
					...state.actions,
					[actionToAppend.id]: actionToAppend,
				},
				newAction: null,
			};
		}
		case UPDATE_NEW_ACTION:
			return {
				...state,
				newAction: {
					...state.newAction,
					...reduxAction.payload.data,
				},
			};
		case REMOVE_NEW_ACTION:
			return {
				...state,
				newAction: null,
			};
		case CREATE_LINK: {
			const { actionId } = reduxAction.payload;
			const action = state.actions[actionId];
			return {
				...state,
				actions: {
					...state.actions,
					[actionId]: {
						...action,
						outputLink: {
							coordinates: {
								x: action.coordinates.x + ICON_SIZE,
								y: action.coordinates.y + ICON_SIZE / 2,
							},
						},
					},
				},
			};
		}
		case UPDATE_LINK_COORDINATES: {
			const { actionId, coordinates } = reduxAction.payload;
			const action = state.actions[actionId];
			return {
				...state,
				actions: {
					...state.actions,
					[actionId]: {
						...action,
						outputLink: {
							coordinates,
						},
					},
				},
			};
		}
		case SET_ACTION_OUTPUT_LINK:
			return {
				...state,
				actions: getActionsOnSettingLink(
					reduxAction.payload.actionId,
					reduxAction.payload.outputLink,
					state.actions
				),
			};
		case REMOVE_LINK:
			return {
				...state,
				actions: getActionsOnRemovingLink(reduxAction.payload.actionId, state.actions),
			};
		default:
			return state;
	}
};
