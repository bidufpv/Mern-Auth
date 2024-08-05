import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Header />
    
    <Routes>
    <Route path='/' element={Home} />
    <Route path='/Profile' element={Profile} />
    <Route path='/About' element={About} />
    <Route path='/Signin' element={Signin} />
    <Route path='/Signup' element={Signup} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
