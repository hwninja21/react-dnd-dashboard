import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Styled from './styled-components';

export default class Tabs extends Component {
	render() {
		return (
			<Styled.Container>
				<Styled.InnerContainer>
					{this.props.tabs.map(tab => (
						<Styled.Tab
							onClick={() => this.props.onTabClick(tab.id)}
							active={tab.id === this.props.activeTabId}
						>
							<Styled.Text>{tab.label}</Styled.Text>
						</Styled.Tab>
					))}
				</Styled.InnerContainer>
			</Styled.Container>
		);
	}
}

Tabs.propTypes = {
	activeTabId: PropTypes.string.isRequired,
	onTabClick: PropTypes.func.isRequired,
	tabs: PropTypes.array.isRequired,
};
