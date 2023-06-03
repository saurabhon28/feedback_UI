import { useState } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm ({handleAdd}) {

     const [text,setText] =useState('');
     const [rating, setRating] = useState(10);
     const [btnDisabled, setBtnDisabled] = useState('true');
     const [message, setMessage] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();

        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
              }
              handleAdd(newFeedback);
              setText(''); 
        }
     }

     const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        } else if( text != '' && text.trim().length <= 10){
            setMessage('Text must be of atleast 10 charecter !!');
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
         setText(e.target.value);
     }

    return (
    <Card>
         <form onSubmit={handleSubmit} >
            <h2>How would you rate for our services?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} value={text}
                 type="text" placeholder="Write a review"/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && (<div className="message">{message}</div>)}
         </form>
    </Card>
    )
}

export default FeedbackForm