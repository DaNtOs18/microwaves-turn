import React, { Component } from 'react';
import KitchenComponent from './Kitchen';

class Kitchen extends Component {

    state = {
        timerOn: [false, false, false, false, false, false],
        timerStart: [0, 0, 0, 0, 0, 0],
        timerTime: [0, 0, 0, 0, 0, 0]
    };

    startTimer = index => {
        const { timerOn, timerTime, timerStart } = this.state;
        timerOn[index] = true;
        timerTime[index] = this.state.timerTime[index];
        timerStart[index] = this.state.timerTime[index];
        this.setState({
            timerOn: timerOn,
            timerTime: timerTime,
            timerStart: timerStart
        });
        const timer = () => {
            const newTime = this.state.timerTime[index] - 10;
            if (newTime >= 0) {
                timerTime[index] = newTime;
                this.setState({
                    timerTime: timerTime
                });
            } else {
                clearInterval(this.timer);
                timerOn[index] = false;
                this.setState({ timerOn: timerOn });
            }
        };
        if (index === 0) {
            this.timer0 = setInterval(timer, 10);
        }
        if (index === 1) {
            this.timer1 = setInterval(timer, 10);
        }
        if (index === 2) {
            this.timer2 = setInterval(timer, 10);
        }
        if (index === 3) {
            this.timer3 = setInterval(timer, 10);
        }
        if (index === 4) {
            this.timer4 = setInterval(timer, 10);
        }
        if (index === 5) {
            this.timer5 = setInterval(timer, 10);
        }
    };

    stopTimer = index => {
        const { timerOn } = this.state;
        switch (index) {
            case 0:
                clearInterval(this.timer0);
                break;
            case 1:
                clearInterval(this.timer1);
                break;
            case 2:
                clearInterval(this.timer2);
                break;
            case 3:
                clearInterval(this.timer3);
                break;
            case 4:
                clearInterval(this.timer4);
                break;
            case 5:
                clearInterval(this.timer5);
                break;
            default:
                break;
        }
        timerOn[index] = false;
        this.setState({ timerOn: timerOn });
    };

    resetTimer = index => {
        const { timerTime } = this.state;
        if (this.state.timerOn[index] === false) {
            timerTime[index] = 0;
            this.setState({
                timerTime: timerTime
            });
        }
    };

    adjustTimer = index => {
        const { timerTime, timerOn } = this.state;
        if (!timerOn[index]) {
            const timerTimeTmp = JSON.parse(JSON.stringify(timerTime));
            timerTimeTmp[index] = timerTime[index] + 30000;
            this.setState({ timerTime: timerTimeTmp });
        }
        this.forceUpdate();
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