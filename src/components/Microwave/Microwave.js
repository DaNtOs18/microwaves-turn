function MicrowaveComponent(props) {
    const { timerTime, seconds, minutes, timerStart, timerOn, startTimer, stopTimer, adjustTimer, resetTimer } = props;
    return (
        <div className="w-full h-full border-8 border-solid border-gray-700 flex flex-row">
            <div className="w-9/12 h-full border border-solid border-gray-700 p-2">
                <div className="w-full h-full border border-solid border-gray-700 bg-white bg-opacity-5" />
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
                    onClick={adjustTimer}
                >
                    <span className="bold text-white">30</span>
                </button>
                <div className="w-11/12 h-1/4 flex flex-row items-center justify-evenly">
                    <button
                        className="w-9 h-9 border border-solid bg-gray-500 hover:bg-gray-700 rounded-full cursor-pointer flex items-center justify-center focus:outline-none"
                        onClick={timerOn === true && timerTime >= 1000 ? stopTimer : (
                            (timerOn === false || timerTime < 1000) && (timerStart !== timerTime && timerStart > 0) ? resetTimer : (
                                console.log()
                            )
                        )
                        }
                    >
                        <span className="bold text-white uppercase text-xs">Stop</span>
                    </button>
                    <button
                        className="w-9 h-9 border border-solid bg-gray-500 hover:bg-gray-700 rounded-full cursor-pointer flex items-center justify-center focus:outline-none"
                        onClick={(timerOn === false && (timerStart === 0 || timerTime === timerStart)) || (timerOn === false && (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0)) ? startTimer : console.log()}
                    >
                        <span className="bold text-white uppercase text-xs">Start</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MicrowaveComponent;