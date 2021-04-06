import React, { Component } from 'react';
import PanelComponent from './Panel';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { seconds, minutes } = this.props;
        return (
            <PanelComponent
                seconds={seconds}
                minutes={minutes}
            />
        );
    }
}

export default Panel;