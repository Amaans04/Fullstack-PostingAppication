import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePosts from './pages/CreatePosts'
import Feed from './pages/Feed'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/create-post' element={<CreatePosts/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </Router>
  )
}

export default App
