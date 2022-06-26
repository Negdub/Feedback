import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import FeedbackList from "../components/FeedbackList"
import FeedbackData from "../data/FeedbackData"
import FeedbackStats from "../components/FeedbackStats"
import FeedbackForm from "../components/FeedbackForm"
import AbouticonLink from '../components/AbouticonLink'


function FeedbackFormPage() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure'))
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  return (
    
      <div >
       <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <AbouticonLink /> 
      </div>  
    
  )
}

export default FeedbackFormPage