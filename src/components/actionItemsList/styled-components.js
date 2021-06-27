import styled from 'styled-components';

const Container = styled.div`
	background-color: white;
	border-radius: 5px;
	flex-wrap: wrap;
	height: 100%;
	padding-left: 20px;
	width: 350px;
`;

const ActionItemsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	overflow-y: scroll;
	width: 350px;
`;

export default {
	Container,
	ActionItemsContainer
};
