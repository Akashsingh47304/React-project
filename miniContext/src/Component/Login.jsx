import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/context'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

  return (
    <div className="">
        <h2>Login</h2>
        <input className="px-4 py-2 rounded border border-gray-300"
         type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value) }
        placeholder='username'  />
      
        <input className="px-4 py-2 rounded border border-gray-300"
        type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login