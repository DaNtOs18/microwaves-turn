import React, { Component } from 'react';
import KitchenComponent from './Kitchen';

class Kitchen extends Component {

    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
            }
        }, 10);
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };

    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerTime: 0
            });
        }
    };

    adjustTimer = () => {
        const { timerTime, timerOn } = this.state;
        if (!timerOn) {
            this.setState({ timerTime: timerTime + 30000 });
        }
    };

    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        return (
            <KitchenComponent
                timerTime={timerTime}
                timerStart={timerStart}
                timerOn={timerOn}
                startTimer={this.startTimer}
                stopTimer={this.stopTimer}
                adjustTimer={this.adjustTimer}
                resetTimer={this.resetTimer}
            />
        );
    }
}

export default Kitchen;