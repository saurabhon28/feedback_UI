function FeedbackStats({ feedback })  {

    let sum = feedback.reduce((acc, curr)=> {
        return (acc += curr.rating);
    }, 0);

    let average = sum/feedback.length;
    average = average.toFixed(1);

    return (
        <div className="feedback-stats">
            {/* {feedback.length} */}
            <h4>{feedback.length} Reviews</h4>
            {/* {isNaN(average) ? 0 : average}   */}
            <h4>Average Rating :{isNaN(average) ? 0 : average}</h4>
        </div>
    );
};

export default FeedbackStats;