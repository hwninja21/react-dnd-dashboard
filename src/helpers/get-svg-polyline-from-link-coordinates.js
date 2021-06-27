const getSvgPolylineFromLinkVector = ({ x, y }) => {
	if (x >= 0 && y >= 0) {
		const middleX = x / 2;
		return `0, 0 ${middleX}, 0 ${middleX}, ${y} ${x}, ${y}`;
	}
	if (x >= 0 && y < 0) {
		const minusY = -1 * y;
		const middleX = x / 2;
		return `0, ${minusY} ${middleX}, ${minusY} ${middleX}, 0 ${x}, 0`;
	}
	if (x < 0 && y < 0) {
		const minusX = -1 * x;
		const middleX = minusX / 2;
		const minusY = -1 * y;
		return `0, 0 ${middleX}, 0 ${middleX}, ${minusY} ${minusX}, ${minusY}`;
	}
	if (x < 0 && y >= 0) {
		const minusX = -1 * x;
		const middleX = minusX / 2;
		return `0, ${y} ${middleX}, ${y} ${middleX}, 0 ${minusX}, 0`;
	}
	return '';
};

export default getSvgPolylineFromLinkVector;
