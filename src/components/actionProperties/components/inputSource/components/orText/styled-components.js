import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	align-items: center;
	width: auto;
	margin: 20px 0;
`;

const OrText = styled.p`
	font-size: 30px;
`;

const Line = styled.div`
	height: 1px;
	margin: 0 20px;
	min-width: 60px;
	background-color: black;
`;

export default {
	Container,
	OrText,
	Line,
};
