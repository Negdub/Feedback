import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>My first react app</h1>
        <p>This is my first time learning react while building somthing yeah english</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to='/'>
            Back to home
          </Link>
        </p>
      </div>  
    </Card>
  )
}

export default AboutPage
