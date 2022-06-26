import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import AboutPage from './pages/AboutPage'
import FeedbackFormPage from './pages/FeedbackFormPage'
import Post from './pages/Post'
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
  
  
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>       
            <Route path='/' element={<FeedbackFormPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route> 
            <Route path='/post*' element={<Post />}></Route>
          </Routes> 
          
        </div>
      </Router>
    </FeedbackProvider>  
  )
}

export default App