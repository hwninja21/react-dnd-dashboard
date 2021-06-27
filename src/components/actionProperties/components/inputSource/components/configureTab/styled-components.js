import styled from 'styled-components';

const Container = styled.div`
	padding: 15px;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 15px;
	width: 450px;
`;

const BigGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 100px;
	width: 1000px;
`;

export default {
	Container,
	BigGrid,
	Grid,
};
