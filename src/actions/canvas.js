export const ADD_ACTION = 'ADD_ACTION';
export const UPDATE_ACTION = 'UPDATE_ACTION';
export const REMOVE_ACTION = 'REMOVE_ACTION';

export const addAction = action => ({
	type: ADD_ACTION,
	payload: { action },
});

export const updateAction = (id, data) => ({
	type: UPDATE_ACTION,
	payload: { id, data },
});

export const removeAction = id => ({
	type: REMOVE_ACTION,
	payload: { id },
});

export const CREATE_NEW_ACTION = 'CREATE_NEW_ACTION';
export const UPDATE_NEW_ACTION = 'UPDATE_NEW_ACTION';
export const REMOVE_NEW_ACTION = 'REMOVE_NEW_ACTION';
export const APPEND_NEW_ACTION = 'APPEND_NEW_ACTION';

export const createNewAction = action => ({
	type: CREATE_NEW_ACTION,
	payload: { action },
});

export const appendNewAction = canvasState => ({
	type: APPEND_NEW_ACTION,
	payload: { canvasState },
});

export const updateNewAction = data => ({
	type: UPDATE_NEW_ACTION,
	payload: { data },
});

export const removeNewAction = () => ({
	type: REMOVE_NEW_ACTION,
});

export const CREATE_LINK = 'CREATE_LINK';
export const UPDATE_LINK_COORDINATES = 'UPDATE_LINK_COORDINATES';
export const REMOVE_LINK = 'REMOVE_LINK';
export const SET_ACTION_OUTPUT_LINK = 'SET_ACTION_OUTPUT_LINK';

export const createLink = actionId => ({
	type: CREATE_LINK,
	payload: { actionId },
});

export const updateLinkCoordinates = (coordinates, actionId) => ({
	type: UPDATE_LINK_COORDINATES,
	payload: { coordinates, actionId },
});

export const removeLink = actionId => ({
	type: REMOVE_LINK,
	payload: { actionId },
});

export const setActionOutputLink = (actionId, outputLink) => ({
	type: SET_ACTION_OUTPUT_LINK,
	payload: { actionId, outputLink },
});
