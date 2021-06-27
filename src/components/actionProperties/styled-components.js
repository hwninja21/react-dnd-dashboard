import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	overflow-y: scroll;
	position: absolute;
	bottom: 0;
	left: 0;
`;

export default {
	Container,
	InnerContainer,
};
