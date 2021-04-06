function PanelComponent(props) {
    const { seconds, minutes } = props;
    return (
        <div className="w-full h-full bg-red-700 p-1">
            <div className="w-full h-full bg-red-400 flex justify-center items-center text-yellow-50 text-4xl font-mono">
                <p>
                    {minutes} : {seconds}
                </p>
            </div>
        </div>
    );
}

export default PanelComponent;