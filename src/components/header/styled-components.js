import styled from 'styled-components';

const Container = styled.div`
	background-color: white;
	border-radius: 5px;
	flex-wrap: wrap;
	height: 60px;
	padding: 10px;
	width:100%;
`;

const ActionItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	overflow-y: scroll;
	width: 200px;
`;

export default {
	Container,
	ActionItemsContainer
};
