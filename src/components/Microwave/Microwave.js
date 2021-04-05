function MicrowaveComponent(props) {
    return (
        <div className="w-full h-full border-8 border-solid border-gray-700 flex flex-row">
            <div className="w-9/12 h-full border border-solid border-gray-700 p-2">
                <div className="w-full h-full border border-solid border-gray-700 bg-white bg-opacity-5" />
            </div>
            <div className="w-3/12 h-full flex flex-col items-center justify-evenly border border-solid border-gray-700 p-1">
                <div className="w-11/12 h-1/4 border border-solid border-gray-700 p-1">

                </div>
                <div className="w-9 h-9 border border-solid bg-gray-500 hover:bg-gray-700 rounded-full cursor-pointer flex items-center justify-center">
                    <span className="bold text-white">30</span>
                </div>
                <div className="w-11/12 h-1/4 flex flex-row items-center justify-evenly">
                <div className="w-9 h-9 border border-solid bg-gray-500 hover:bg-gray-700 rounded-full cursor-pointer flex items-center justify-center">
                    <span className="bold text-white uppercase text-xs">Stop</span>
                </div>
                <div className="w-9 h-9 border border-solid bg-gray-500 hover:bg-gray-700 rounded-full cursor-pointer flex items-center justify-center">
                    <span className="bold text-white uppercase text-xs">Start</span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MicrowaveComponent;