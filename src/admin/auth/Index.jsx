import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function Index() {
    const [login,setLogin] = useState(true)
  return (
    <div className='auth-wrapper'>
        {login ? <Login setLogin={setLogin}/> :<Register setLogin={setLogin}/>}
        
    </div>
  )
}
