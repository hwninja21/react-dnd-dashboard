import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';
import OrText from '../orText';
import Styled from './styled-components';
import StyledText from 'components/styled/text';
import Input from 'components/styled/input';
import Select from 'components/select';
import Switch from 'components/switch';

const datasetFormatOptions = [
	{
		value: 'csv',
		label: 'CSV',
	},
];

export default class ConfigureTab extends Component {
	renderGrid() {
		const {
			customSchema,
			datasetFormat,
			delimiter,
			header,
			inferSchema,
			password,
			sftpDataset,
			sftpHost,
			username,
		} = this.props;

		if (datasetFormat === 'csv') {
			return (
				<Styled.BigGrid>
					<Styled.Grid>
						<Select options={datasetFormatOptions} value={datasetFormat} onChange={() => false} />
						<Input value={delimiter} onChange={() => false} placeholder='Delimiter' />
						<Switch label='Header' onChange={() => false} checked={header} />
						<Input value={customSchema} onChange={() => false} placeholder='Custom Schema' />
						<Switch label='infeSchema' onChange={() => false} checked={inferSchema} />
						<div />
						<Switch label='SFTP Dataset' onChange={() => false} checked={sftpDataset} />
						<Input value={sftpHost} onChange={() => false} placeholder='SFTP Host' />
						<div />
						<Input value={username} onChange={() => false} placeholder='Username' />
						<Button label='Browse' onClick={() => false} />
						<Input value={password} onChange={() => false} placeholder='Password' />
					</Styled.Grid>
					<Styled.Grid>
						<div>
							<Select
								style={{ marginBottom: '15px' }}
								options={datasetFormatOptions}
								value={datasetFormat}
								onChange={() => false}
							/>
							<Button label='Choose' onClick={() => false} />
						</div>
					</Styled.Grid>
				</Styled.BigGrid>
			);
		}
		return (
			<Styled.BigGrid>
				<Styled.Grid>
					<div>
						<Select
							style={{ marginBottom: '15px' }}
							options={datasetFormatOptions}
							value={datasetFormat}
							onChange={() => false}
						/>
						<Button label='Browse' onClick={() => false} />
					</div>
				</Styled.Grid>
				<Styled.Grid>
					<div>
						<Select
							style={{ marginBottom: '15px' }}
							options={datasetFormatOptions}
							value={datasetFormat}
							onChange={() => false}
						/>
						<Button label='Choose' onClick={() => false} />
					</div>
				</Styled.Grid>
			</Styled.BigGrid>
		);
	}

	render() {
		return (
			<Styled.Container>
				<StyledText.Description>
					Select Data source which will connect jobs with it
				</StyledText.Description>
				<OrText leftText='Select file from local' rightText='Select Data Source Connection' />
				{this.renderGrid()}
			</Styled.Container>
		);
	}
}

ConfigureTab.propTypes = {
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
