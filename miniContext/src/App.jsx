import { useState } from 'react'
import UserContext from './Context/context'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

import './App.css'

function App() {
  

  return (
        <UserContextProvider>
      <div className="min-h-screen bg-slate-600 flex flex-col items-center justify-center gap-6">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
