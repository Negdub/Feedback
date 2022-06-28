import { useContext } from 'react'
import Feedbackitem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList({ handleDelete }) {
  const {feedback} = useContext(FeedbackContext)
  
  if(!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedbackitem 
          key={item.id} 
          item={item} 
          handleDelete={handleDelete}
        />
      ))}
    </div>
  )
}


export default FeedbackList