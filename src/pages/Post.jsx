import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {

  const status = 403

  const navigate = useNavigate()

  const onClick = () => {
    console.log('hi')
    navigate('/about')
  }

  if (status === 404) {
    return <Navigate to='/notfound' />
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>hello</h1>} />
      </Routes>
    </div>
  )
}

export default Post
