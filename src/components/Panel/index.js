import React, { Component } from 'react';
import PanelComponent from './Panel';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { timerTime, index } = this.props;
        return (
            <PanelComponent
                timerTime={timerTime}
                index={index}
            />
        );
    }
}

export default Panel;