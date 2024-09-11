import { useState } from 'react'
import Header from '../src/components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {About,Profile,Home,Signin,Signup} from './pages/index'
import PrivateRoute from './components/PrivateRoute'


function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Header />
    
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route element={<PrivateRoute/>}>
    <Route path='/Profile' element={<Profile/>} />
    </Route>
    <Route path='/About' element={<About/>} />
    <Route path='/Signin' element={<Signin/>} />
    <Route path='/Signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
