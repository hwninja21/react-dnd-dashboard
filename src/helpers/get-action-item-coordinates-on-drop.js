const getActionItemCoordinatesOnDrop = (
	newActionItemCoordinates,
	canvasState
) => ({
	y:
		newActionItemCoordinates.y -
		canvasState.boundingRect.top +
		canvasState.scrollPosition.y,
	x:
		newActionItemCoordinates.x -
		canvasState.boundingRect.left +
		canvasState.scrollPosition.x
});

export default getActionItemCoordinatesOnDrop;
