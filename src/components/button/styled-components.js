import styled from 'styled-components';

const Container = styled.div`
	width: 80px;
	height: 25px;
	border-radius: 12.5px;
	align-items: center;
	justify-content: center;
	display: flex;
	background-color: rgb(79, 160, 255);
	user-select: none;
	cursor: pointer;
`;

const Text = styled.p`
	font-size: 12px;
	color: white;
	letter-spacing: 0.5px;
`;

export default {
	Container,
	Text,
};
