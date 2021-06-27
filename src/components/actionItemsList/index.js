import ActionItem from './actionItem';
import PropTypes from 'prop-types';
import { createNewAction } from '../../actions/canvas';
import React, { Component } from 'react';
import Styled from './styled-components';
import actions from '../../data';
import { connect } from 'react-redux';
import styles from './mystyle.module.css';
class ActionItemsList extends Component {
	render() {
		return (
			<Styled.Container>
				<span className={styles.searchicon}>
					<i class="fa fa-search" ></i>
				</span>
				<input class="form-control" type="text" placeholder="Search Actions" aria-label="" className={styles.search}></input>
				<Styled.ActionItemsContainer>
					{Object.keys(actions).map(id => (
						<ActionItem
							key={id}
							label={actions[id].label}
							icon={actions[id].icon}
							onMouseDown={coordinates => this.props.createNewAction({ dataId: id, coordinates }
							)
							}
						/>
					))}
				</Styled.ActionItemsContainer>
			</Styled.Container >

		);
	}
}

const mapDispatchToProps = {
	createNewAction,
};

ActionItemsList.propTypes = {
	createNewAction: PropTypes.func.isRequired,
	//createNewAction: PropTypes.func.isRequired,
};

export default connect(
	null,
	mapDispatchToProps
)(ActionItemsList);
