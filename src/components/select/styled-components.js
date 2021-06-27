import styled from 'styled-components';

const Select = styled.select`
	display: block;
	font-size: 16px;
	width: 200px;
	height: 40px;
	padding: 0 10px;
	box-sizing: border-box;
	margin: 0;
	border-width: 0;
	box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
	border-radius: 0.5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	:focus {
		outline: none;
	}
`;

export default {
	Select,
};
