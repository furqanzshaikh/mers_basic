import React from 'react'
import Navbar from './components/Navbar'
import CreatePost from './components/CreatePost'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AllPost from './components/AllPost'
import UpdatePost from './components/UpdatePost'
const App = () => {
  return(
    <Router >
    <Navbar/>
      <Routes >
        <Route path='/' element={<CreatePost/>}/>
        <Route path='/all' element={<AllPost/>}/>
        <Route path='/:id' element={<UpdatePost/>}/>

        </Routes>
    </Router>
    
  )
}
export default App