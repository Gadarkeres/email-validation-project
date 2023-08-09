import React, { useState } from 'react'
import "./InputandButton.css"
import Sucess from './Sucess'



const InputandButton = () => {
   const [Email, setEmail] = useState('')
   const [msg, setMsg] = useState(null)
   const [window, setWindow] = useState(null)
   
   

  return (
    <div>
          
      {msg === true &&(
            <p id='error'> Email invalido!</p>
          )}
         
        <p id='email'>Email Adress:</p>
       
    <label>
        <input className='text' type="text" placeholder='email@company.com' onChange={(e) => setEmail(e.target.value)} value={Email} />
    </label>
    <input className='submit' onClick={() =>{
    if (!Email.includes('@')) {
      setMsg(true);
      
      return false
      
    } else {
      setWindow(true)
      setMsg(false)
     
    }
   
    console.log('msg', msg)
    
    }} type="submit" value=" Subscribe to monthly newsletter" />

 {window === true && <Sucess Email = {Email}  setMsg ={setMsg} setWindow={setWindow}></Sucess>}
    </div>
  )
}

export default InputandButton;