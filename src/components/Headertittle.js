import React from 'react'
import img from "../images/illustration-sign-up-mobile.svg"
import "./Headertittle.css"

const Headertittle = () => {
  return (
    <div className='box'>
        <img src={img} alt='imagem'/>
        <h1>Stay Updated</h1>
    </div>
  )
}

export default Headertittle