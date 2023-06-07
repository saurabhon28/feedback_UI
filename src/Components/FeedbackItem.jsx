import Card from './Shared/Card'
import {FaTimes , FaRegHeart, FaHeart} from 'react-icons/fa'
import { useState } from 'react';

function FeedbackItem({item, handleDelete}){
   
    const[toggleLike, setToggleLike] = useState(false);

    return(
         <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() =>  handleDelete(item.id)}
             className="close">
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
            <div className='like-btn'>
                {
                    toggleLike ? (
                        <FaHeart onClick ={() => setToggleLike(!toggleLike)} color= "purplr" />
                    ) : ( <FaRegHeart onClick={() => setToggleLike(!toggleLike)} color="purple" />

                    )}
             </div>
        </Card>
    )
}




export default FeedbackItem