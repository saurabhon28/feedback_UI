function FeedbackStats({ feedback }){

    // let sum = feedback.reduce((acc, cur)=> {
    //     return acc + cur.rating
    // }, 0)

    // let average = sum/feedback.length;
    // average = average.toFixed(1);

    return (
        <div className="feedback-stats">
            {/* {feedback.length} */}
            <h4> Reviews</h4>
            {/* {isNaN(average) ? 0 : average}   */}
            <h4>Average Rating :</h4>
        </div>
    )
}

export default FeedbackStats;