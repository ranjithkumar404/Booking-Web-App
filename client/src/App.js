
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Hotel from './Pages/Hotel'
import Room from './Pages/Room'
import Login from './components/Login'
import Register from './components/Regsiter'
const App = () => {
  return (
   <>
    <div  >
       
       <Router>
       <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/hotel' element={<Hotel/>}/>
     <Route path='/room' element={<Room/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
    </Routes>
       </Router>
       
    </div>
   </>
  )
}

export default App