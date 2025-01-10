import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/login/Login'
import dwnlogo from "../assets/dwnlogo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={dwnlogo} alt="" width="78px" />
      <ul>
        <Link to ='/home'><li>Home</li></Link>
        <Link to ='/products'><li>Products</li></Link>
        <Link to ='/about'><li>About</li></Link>
        <Link to ='/contact'><li>Contact</li></Link>
      </ul>
     <ul>
      <Link to ='/login'><li>Login</li></Link>
      </ul>
      <div className='start'>
      <ul>
      <Link to ='/getstarted'><li>Get Started</li></Link>
      </ul>
      </div>
      </div>
  )
}

export default Navbar
