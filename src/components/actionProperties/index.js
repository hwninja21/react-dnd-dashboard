import InputSourceData from './components/inputSource';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Styled from './styled-components';

class ActionProperties extends Component {
	renderContent() {

		if (!this.props.id) return false;
		switch (this.props.dataId) {
			case 'inputSource':
				return <InputSourceData id={this.props.id} />;
			default:
				return <p>Unknown data Id</p>;
		}
	}

	render() {
		if (!this.props.opened) return false;
		return (
			<Styled.Container onClick={this.props.close} opened={this.props.opened}>
				<Styled.InnerContainer onClick={ev => ev.stopPropagation()}>
					{this.renderContent()}
				</Styled.InnerContainer>
			</Styled.Container>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	dataId: ownProps.id ? state.canvas.actions[ownProps.id].dataId : null,
});

export default connect(mapStateToProps)(ActionProperties);

ActionProperties.propTypes = {
	close: PropTypes.func.isRequired,
	dataId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	opened: PropTypes.bool.isRequired,
};
