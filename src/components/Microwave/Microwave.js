function MicrowaveComponent(props) {
    const { timerTime, timerStart, timerOn, startTimer, stopTimer, adjustTimer, resetTimer, index } = props;
    const seconds = ("0" + (Math.floor((timerTime[index] / 1000) % 60) % 60)).slice(-2);
    const minutes = ("0" + Math.floor((timerTime[index] / 60000) % 60)).slice(-2);
    return (
        <div className="w-full h-full border-8 border-solid border-gray-700 flex flex-row">
            <div className="w-9/12 h-full border border-solid border-gray-700 p-2">
                <div className={`w-full h-full border border-solid border-gray-700 ${timerOn[index] === true ? 'bg-yellow-700 bg-opacity-50' : 'bg-white bg-opacity-5'}`} />
            </div>
            <div className="w-3/12 h-full flex flex-col items-center justify-evenly border border-solid border-gray-700 p-1">
                <div className="w-11/12 h-1/4 border border-solid border-gray-700 p-1">
                    <div className="w-full h-full flex justify-center items-center text-yellow-50 text-lg">
                        <p>
                            {minutes} : {seconds}
                        </p>
                    </div>
                </div>
                <button
                    className="w-9 h-9 border border-solid bg-gray-500 hover:bg-gray-700 rounded-full cursor-pointer flex items-center justify-center focus:outline-none"
                    onClick={() => adjustTimer(index)}
                >
                    <span className="bold text-white" value={index}>30</span>
                </button>
                <div className="w-11/12 h-1/4 flex flex-row items-center justify-evenly">
                    <button
                        className="w-9 h-9 border border-solid bg-gray-500 hover:bg-gray-700 rounded-full cursor-pointer flex items-center justify-center focus:outline-none"
                        onClick={timerOn[index] === true && timerTime[index] >= 1000 ? () => stopTimer(index) : (
                            (timerOn[index] === false || timerTime[index] < 1000) && (timerStart[index] > 0) ? () => resetTimer(index) : (
                                () => console.log('b')
                            )
                        )
                        }
                    >
                        <span className="bold text-white uppercase text-xs">Stop</span>
                    </button>
                    <button
                        className="w-9 h-9 border border-solid bg-gray-500 hover:bg-gray-700 rounded-full cursor-pointer flex items-center justify-center focus:outline-none"
                        onClick={(timerOn[index] === false && (timerStart[index] === 0 || timerTime[index] === timerStart[index])) || (timerOn[index] === false && (timerStart[index] !== 0 && timerStart[index] !== timerTime[index] && timerTime[index] !== 0)) ? () => startTimer(index) : () => console.log()}
                    >
                        <span className="bold text-white uppercase text-xs">Start</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MicrowaveComponent;