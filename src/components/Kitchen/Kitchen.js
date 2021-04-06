import Microwave from '../Microwave';
import Panel from '../Panel';

function KitchenComponent(props) {
    const { timerTime, timerStart, timerOn, startTimer, stopTimer, adjustTimer, resetTimer } = props;
    const seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    const minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    return (
        <div className="w-screen h-screen flex flex-column">
            <div className="w-1/4 h-full bg-gray-100">

            </div>
            <div className="w-3/4 h-full flex flex-col">
                <div className="w-full h-1/6 flex flex-row flex-wrap">
                    <div className="w-1/3 flex flex-col items-center justify-evenly">
                        <div className="w-5/12 h-2/5 border border-solid border-red-400">
                            <Panel
                                seconds={seconds}
                                minutes={minutes}
                            />
                        </div>
                        <div className="w-5/12 h-2/5 border border-solid border-red-400">
                            <Panel />
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-evenly">
                        <div className="w-5/12 h-2/5 border border-solid border-red-400">
                            <Panel />
                        </div>
                        <div className="w-5/12 h-2/5 border border-solid border-red-400">
                            <Panel />
                        </div>
                    </div><div className="w-1/3 flex flex-col items-center justify-evenly">
                        <div className="w-5/12 h-2/5 border border-solid border-red-400">
                            <Panel />
                        </div>
                        <div className="w-5/12 h-2/5 border border-solid border-red-400">
                            <Panel />
                        </div>
                    </div>
                </div>
                <div className="w-full h-3/6 border border-solid border-black flex flex-row flex-wrap">
                    <div className="w-1/3 bg-black flex flex-col items-center justify-evenly">
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave
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
                        </div>
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave />
                        </div>
                    </div>
                    <div className="w-1/3 bg-black flex flex-col items-center justify-evenly">
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave />
                        </div>
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave />
                        </div>
                    </div><div className="w-1/3 bg-black flex flex-col items-center justify-evenly">
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave />
                        </div>
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave />
                        </div>
                    </div>
                </div>
                <div className="w-full h-2/6 bg-gray-200"></div>
            </div>
        </div>
    );
}

export default KitchenComponent;