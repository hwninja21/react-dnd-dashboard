import styled from 'styled-components';

const Container = styled.div`
	width: 200px;
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

const SwitchWrapper = styled.label`
	position: relative;
	display: inline-block;
	width: 70px;
	height: 34px;
`;

const Checkbox = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;

const Slider = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: 0.4s;
	cursor: pointer;
	background-color: #eee;
	border-radius: 34px;

	${Checkbox}:focus + & {
		box-shadow: 0 0 1px #3b97d3;
	}

	&:before {
		position: absolute;
		content: '';
		left: 1px;
		bottom: 1px;
		transition: 0.4s;
		height: 32px;
		width: 32px;
		background-color: white;
		border-radius: 50%;

		${Checkbox}:checked + & {
			transform: translateX(36px);
			background-color: #3b97d3;
		}
	}
`;

export default {
	Container,
	SwitchWrapper,
	Checkbox,
	Slider,
};
