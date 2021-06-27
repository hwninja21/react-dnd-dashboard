import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfigureTab from './components/configureTab';
import DataTab from './components/dataTab';
import Styled from './styled-components';
import Tabs from '../tabs/index';

const tabs = [
	{
		id: 'configure',
		label: 'Configure',
	},
	{
		id: 'data',
		label: 'Data',
	},
];

class InputSourceData extends Component {
	state = {
		activeTabId: tabs[0].id,
	};

	renderActiveTab() {
		switch (this.state.activeTabId) {
			case 'data':
				return <DataTab />;
			default:
			case 'configure':
				return (
					<ConfigureTab
						customSchema={this.props.customSchema}
						datasetFormat={this.props.datasetFormat}
						delimiter={this.props.delimiter}
						header={this.props.header}
						inferSchema={this.props.inferSchema}
						password={this.props.password}
						sftpDataset={this.props.sftpDataset}
						sftpHost={this.props.sftpHost}
						username={this.props.username}
					/>
				);
		}
	}

	render() {
		return (
			<div>
				<Tabs tabs={tabs} activeTabId={this.state.activeTabId} onTabClick={() => false} />
				<Styled.TabContainer>{this.renderActiveTab()}</Styled.TabContainer>
			</div>
		);
	}
}

InputSourceData.propTypes = {
	customSchema: PropTypes.string,
	datasetFormat: PropTypes.string,
	delimiter: PropTypes.string,
	header: PropTypes.bool,
	inferSchema: PropTypes.bool,
	password: PropTypes.string,
	sftpDataset: PropTypes.bool,
	sftpHost: PropTypes.string,
	username: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
	const actionPayload = state.canvas.actions[ownProps.id].payload;

	return {
		customSchema: actionPayload.customSchema,
		datasetFormat: actionPayload.datasetFormat,
		delimiter: actionPayload.delimiter,
		header: actionPayload.header,
		inferSchema: actionPayload.inferSchema,
		password: actionPayload.password,
		sftpDataset: actionPayload.sftpDataset,
		sftpHost: actionPayload.sftpHost,
		username: actionPayload.username,
	};
};

export default connect(mapStateToProps)(InputSourceData);
