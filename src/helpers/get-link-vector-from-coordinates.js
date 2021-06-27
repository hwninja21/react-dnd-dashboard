const getLinkVectorFromCoordinates = (startCoordinates, endCoordinates) => {
	return {
		x: endCoordinates.x - startCoordinates.x,
		y: endCoordinates.y - startCoordinates.y
	};
};

export default getLinkVectorFromCoordinates;
