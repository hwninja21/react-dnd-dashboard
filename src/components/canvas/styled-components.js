import styled, { css } from 'styled-components';

const Container = styled.div`
	height: 100%;
	width: 100%;
	overflow: scroll;
	position: relative;
`;

const CanvasDiv = styled.div`
	transform: ${props => css`scale(${props.scale})`};
	transform-origin: top left;
	width: 1000px;
	height: 1000px;
`;

export default {
	Container,
	CanvasDiv,
};
