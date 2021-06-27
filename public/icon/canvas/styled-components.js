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
	width: 2000px;
	height: 2000px;
`;

export default {
	Container,
	CanvasDiv,
};
