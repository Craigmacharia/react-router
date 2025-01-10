import React from 'react'
import "./home.scss"
import dwn from "../assets/dwn.png"


const Home = () => {
  return (
    <div>
      <h3>WELCOME TO DAWN</h3>
      <div className='pic'>
        <img src={dwn} alt=""width={500}></img>

        <div className='par'><p2>Sales</p2></div>
      </div>
    </div>
  )
}

export default Home
