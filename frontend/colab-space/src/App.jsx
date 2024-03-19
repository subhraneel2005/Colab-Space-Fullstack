import React, { useEffect, useState } from 'react'
import UseContextProvider from './contexts/UseContextProvider'
import { Routes, Route } from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
import HomePge from './components/HomePge'
import Loader from './components/Loader'
import CreateRoom from './components/CreateRoom'

function App() {

  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
      
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 

      return () => clearTimeout(timeout);
    }, []);

    if(isLoading){
      return <Loader/>;
    }

  return (
    <UseContextProvider>
      <Routes>
        <Route path='/' element={<HomePge/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/createRoom' element={<CreateRoom/>}/>
      </Routes>
    </UseContextProvider>
  )
}

export default App