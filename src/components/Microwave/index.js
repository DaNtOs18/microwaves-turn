import React, { Component } from 'react';
import MicrowaveComponent from './Microwave';

class Microwave extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { timerTime, timerStart, timerOn, startTimer, stopTimer, adjustTimer, resetTimer, index } = this.props;
        return (
            timerTime ? (
                <MicrowaveComponent
                    timerTime={timerTime}
                    timerStart={timerStart}
                    timerOn={timerOn}
                    startTimer={startTimer}
                    stopTimer={stopTimer}
                    adjustTimer={adjustTimer}
                    resetTimer={resetTimer}
                    index={index}
                />
            ) : (
                null
            )
        );
    }
}

export default Microwave;