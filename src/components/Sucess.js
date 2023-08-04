import React from 'react'
import './InputandButton.css'
import icosucess from "../images/icon-success.svg"

const Sucess = ({Email, setwindow, setWindow}) => {
  return (
    
    <div className='sucess' style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', }}>
    
      
    <img src={icosucess} alt="sucesso" />
    <h1>Thanks for <br></br>subscribing!</h1>
    <p> A confirmation email has been sent to <strong>{Email} </strong>
  Please open it and click the button inside to confirm your subscription.
</p> 
<button onClick={() =>{
setWindow(false)
}}>Dismiss message</button>
  </div>
  )
}

export default Sucess