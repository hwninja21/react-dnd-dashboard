import styled from 'styled-components';

const Container = styled.div`
	top: 0;
	left: 0;
	position: absolute;
	overflow: visible;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CloseIconContainer = styled.div`
	background-color: #eee;
	height: 30px;
	width: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	z-index: 999;

	:hover {
		opacity: 1;
	}
`;

const CloseIcon = styled.div`
	cursor: pointer;
	background-color: red;
	height: 20px;
	width: 20px;
`;

const Svg = styled.svg`
	position: absolute;
`;

export default {
	CloseIconContainer,
	CloseIcon,
	Container,
	Svg,
};
