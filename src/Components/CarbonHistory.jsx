import useCarbonStore from "../useCarbonStore";

const CarbonHistory = () => {
    const { history, clearHistory } = useCarbonStore();

    return (
        <div>
            <h2>Past Calculations</h2>
            {history.length === 0 ? <p>No history yet.</p> : (
                <ul>
                    {history.map((entry, index) => (
                        <li key={index}>
                            <strong>{entry.carbonFootprint}</strong>
                            <ul>
                                {entry.recommendations.map((point, i) => (
                                    <li key={i}>{point}</li> // Render each recommendation as a list item
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
            {history.length > 0 && <button onClick={clearHistory}>Clear History</button>}
        </div>
    );
};

export default CarbonHistory;
