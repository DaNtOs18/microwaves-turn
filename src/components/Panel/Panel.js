function PanelComponent(props) {
    const { timerTime, index } = props;
    const seconds = ("0" + (Math.floor((timerTime[index] / 1000) % 60) % 60)).slice(-2);
    const minutes = ("0" + Math.floor((timerTime[index] / 60000) % 60)).slice(-2);
    return (
        <div className={`w-full h-full p-1 ${(seconds === '00' && minutes === '00') ? 'bg-green-700' : 'bg-red-700'}`}>
            <div className={`w-full h-full flex justify-center items-center text-yellow-50 text-4xl font-mono ${(seconds === '00' && minutes === '00') ? 'bg-green-400' : 'bg-red-400'}`}>
                <p>
                    {minutes} : {seconds}
                </p>
            </div>
        </div>
    );
}

export default PanelComponent;