import CanvasActionItem from '../canvasActionItem';
import LinkItem from '../linkItem';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Styled from './styled-components';

export default class ZoomControlPanel extends Component {
    render() {
        const { onPlusPress, onMinusPress } = this.props;

        return <Styled.Container />;
    }
}

ZoomControlPanel.propTypes = {
    onPlusPress: PropTypes.func.isRequired,
    onMinusPress: PropTypes.func.isRequired,
};
