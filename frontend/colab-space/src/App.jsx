import React from 'react'
import UseContextProvider from './contexts/UseContextProvider'
import { Routes, Route } from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
import HomePge from './components/HomePge'

function App() {
  return (
    <UseContextProvider>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/homePage' element={<HomePge/>}/>
      </Routes>
    </UseContextProvider>
  )
}

export default App