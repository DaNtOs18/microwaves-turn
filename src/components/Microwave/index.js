import React, { Component } from 'react';
import MicrowaveComponent from './Microwave';

class Microwave extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { timerTime, seconds, minutes, timerStart, timerOn, startTimer, stopTimer, adjustTimer, resetTimer } = this.props;
        return (
            <MicrowaveComponent
                timerTime={timerTime}
                seconds={seconds}
                minutes={minutes}
                timerStart={timerStart}
                timerOn={timerOn}
                startTimer={startTimer}
                stopTimer={stopTimer}
                adjustTimer={adjustTimer}
                resetTimer={resetTimer}
            />
        );
    }
}

export default Microwave;