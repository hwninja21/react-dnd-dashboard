import React from 'react';

import { storiesOf } from '@storybook/react';
import { Store, StateDecorator } from '@sambego/storybook-state';
import ActionProperties from 'components/actionProperties';
import { Provider } from 'react-redux';
import Select from 'components/select';
import StyledInput from 'components/styled/input';
import Switch from 'components/switch';
import Button from 'components/button';
import store from 'store';
import { addAction } from 'actions/canvas';

const withProvider = story => <Provider store={store}>{story()}</Provider>;

store.dispatch(
	addAction({
		id: '1',
		payload: {
			customSchema: 'fqwef',
			datasetFormat: 'csv',
			delimiter: 'qwegadg',
			header: true,
			inferSchema: true,
			password: 'qwegagq',
			sftpDataset: false,
			sftpHost: 'qewg',
			username: '',
		},
	})
);

storiesOf('ActionData', module)
	.addDecorator(withProvider)
	.add('Input source', () => <ActionProperties opened={true} dataId='inputSource' id='1' />);

storiesOf('Select', module).add('default', () => (
	<Select
		value={1}
		onChange={() => false}
		options={[{ label: '1', value: 1 }, { label: '2', value: 2 }]}
	/>
));

storiesOf('Input', module).add('default', () => <StyledInput placeholder='Delimeter' />);
storiesOf('Button', module).add('default', () => <Button label='Button' />);

const smallStore = new Store({
	checked: false,
});

storiesOf('Switch', module)
	.addDecorator(StateDecorator(smallStore))
	.add('default', () => (
		<Switch
			label='Switch'
			onChange={() => smallStore.set({ checked: !smallStore.get('checked') })}
			checked={smallStore.get('checked')}
		/>
	));
