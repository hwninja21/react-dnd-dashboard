import styled from 'styled-components';

const Text = styled.p`
	margin-bottom: 10px;
	font-size: 18px;
`;

const Description = styled(Text)`
	color: res;
`;

const Normal = styled.p(Text);

export default { Description, Normal };
