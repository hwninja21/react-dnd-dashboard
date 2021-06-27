import styled from 'styled-components';

const Container = styled.div`
	padding-left: 200px;
	display: flex;
`;

const InnerContainer = styled.div`
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	display: flex;
	overflow: hidden;
`;

const Tab = styled.div`
	height: 40px;
	width: 100px;
	cursor: pointer;
	user-select: none;
	opacity: ${props => (props.active ? '1' : '0.3')};
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Text = styled.p`
	font-weight: 300;
`;

export default {
	Container,
	InnerContainer,
	Tab,
	Text,
};
