import React from 'react'
import dwn from "../assets/dwn.png"
import "./card/products.scss"

const Products = () => {
  return (

    <div className="card">
      <div className="homepic">
    <img  src={dwn} alt="home pic"width={300}></img>
    </div>
    <div className="cardheader">
    <h2>SCONES</h2>
    <p1>200(6pack)</p1>
    <button className='butn'>Add to cart</button>
    </div>
    </div>
  )
}




export default Products


