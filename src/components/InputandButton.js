import React, { useState } from 'react'
import "./InputandButton.css"
import Sucess from './Sucess'



const InputandButton = () => {
   const [Email, setEmail] = useState('')
   const [msg, setMsg] = useState('')
   const [window, setWindow] = useState(null)

  const verifyemail = () => {
    if (!/^\S+@\S+\.\S+$/.test(Email)) {
      setMsg("Email inválido!");
    } else{
      setWindow(true)
      setMsg("")
    }
  }
   
   

  return (
    <div>
        <p id='email'>Email Adress:</p>
    <label>
        <input className='text' type="text" placeholder='email@company.com' onChange={(e) => setEmail(e.target.value)} value={Email} />
    </label>
    <input className='submit' onClick={(verifyemail)} type="submit" value=" Subscribe to monthly newsletter" />
    {msg &&  <p id='error'>{msg}</p>}

          {window === true && <Sucess Email = {Email}  setMsg ={setMsg} setWindow={setWindow}></Sucess>}
    </div>
  )
}

export default InputandButton;