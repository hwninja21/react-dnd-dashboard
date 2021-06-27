import React, { Component } from 'react';
import ActionItemsList from './components/actionItemsList';
import Styled from './styled-components';
import Canvas from './components/canvas';
import Header from './components/header';
import Preview from './components/preview';
import ActionProperties from 'components/actionProperties';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
class App extends Component {
	state = {
		actionPropertiesOpened: false,
		actionPropertiesOpenedId: null,
	};

	openActionProperties = id => {
		this.setState({
			actionPropertiesOpened: true,
			actionPropertiesOpenedId: id,
		});
	};

	closeActionProperties = () => {
		this.setState({
			actionPropertiesOpened: false,
			actionPropertiesOpenedId: null,
		});
	};

	render() {
		const { actionPropertiesOpened, actionPropertiesOpenedId } = this.state;

		return (

			<Styled.Container>
				<Header />
				<Preview />
				<Styled.CanvasAndListContainer>
					<ActionItemsList />
					<Canvas onActionItemClick={this.openActionProperties} />
				</Styled.CanvasAndListContainer>
				<ActionProperties
					close={this.closeActionProperties}
					opened={actionPropertiesOpened}
					id={actionPropertiesOpenedId}
				/>
			</Styled.Container>
		);

	}
}

export default App;
