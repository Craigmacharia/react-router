import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/login/Login'
import Getstarted from './components/Getstarted'
import UserInfo from './pages/UserInfo'
import AdminPanel from './pages/AdminPanel'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Signup from './pages/SignUp'


const App = () => {
  return (

    <div>
      <>
      <Navbar/>

      </>
      <div className='container'>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/userinfo' element={<UserInfo/>} />
        <Route path='/adminpanel' element={<AdminPanel/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Routes>
        <Route path='/getstarted' element={<Getstarted/>} />
        <Route path='/signup' element={<Signup/>} />
        </Routes>
    </div>
    </div>
  )
}

export default App

