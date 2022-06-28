import FeedbackList from "../components/FeedbackList"
import FeedbackStats from "../components/FeedbackStats"
import FeedbackForm from "../components/FeedbackForm"
import AbouticonLink from '../components/AbouticonLink'


function FeedbackFormPage() {
  return (
    
      <div >
       <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        <AbouticonLink /> 
      </div>  
    
  )
}

export default FeedbackFormPage