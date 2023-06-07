import { useState } from "react";
import Header from './Components/Header'
import FeedbackList from "./Components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Components/Pages/AboutPage";
import AboutLinkIcon from "./Components/AboutLinkIcon";


function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
       if(window.confirm('Are you sure Want to delete')){
        setFeedback(feedback.filter((item) => item.id != id));
       }
    }

   const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback,...feedback]);
   }

    return(
     <Router>
        <Header />
         <div className="container">
             <Routes>
                 <Route path="/" element={
                  <>
                      <FeedbackForm handleAdd={addFeedback}/>
                      <FeedbackStats feedback = {feedback}/>
                      <FeedbackList feedback= {feedback}
                       handleDelete={deleteFeedback}/>
                     < AboutLinkIcon />
                  </>
                 }>
                 </Route>
                 <Route path="/about" element={<AboutPage />} />
            </Routes>
           
        </div>
      </Router>
   
    )
}


export default App