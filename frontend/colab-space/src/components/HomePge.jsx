import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext';
import {useNavigate} from "react-router-dom"

function HomePge() {
  const navigate = useNavigate();
  const {handleLogout} = useContext(UseContext);

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 select-none'>
        <div className='block p-3'>
        <h1 className='md:text-[10vw] text-6xl text-slate-900'>Colab Space</h1>
        <p className='md:text-[2vw] text-xl mt-10 text-slate-800'>Connect instantly with video calls, share screens, and chat in realtime. Colab Space is your virtual hub for teamwork and communication.</p>
       
        <button className='rounded-xl md:ml-[44%] bg-gray-200 cursor-pointer text-black px-4 py-3 mt-10' onClick={() => navigate("/register")}>Get started</button>
        </div>
    </div>
  )
}

export default HomePge