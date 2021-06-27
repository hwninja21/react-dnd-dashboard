import getActionItemCoordinatesOnDrop from './get-action-item-coordinates-on-drop';
import uuid from 'uuid';

const getActionPayloadByDataId = dataId => {
	switch (dataId) {
		case 'inputSource':
			return {
				customSchema: '',
				datasetFormat: 'csv',
				delimiter: '',
				header: false,
				inferSchema: false,
				password: '',
				sftpDataset: false,
				sftpHost: '',
				username: '',
			};
		default:
			return {};
	}
};

const getActionFromNewAction = (action, canvasState) => ({
	...action,
	dataId: action.dataId,
	id: uuid(),
	outputLink: null,
	inputLink: null,
	coordinates: getActionItemCoordinatesOnDrop(action.coordinates, canvasState),
	payload: getActionPayloadByDataId(action.dataId),
});

export default getActionFromNewAction;
