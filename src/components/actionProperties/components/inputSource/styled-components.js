import styled from 'styled-components';

const TabContainer = styled.div`
	background-color: white;
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
	TabContainer,
	BigGrid,
	Grid,
};
