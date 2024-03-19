import React from 'react'
import {useNavigate} from "react-router-dom";
import AppBar from './AppBar';

function JoinRoom() {

    const navigate = useNavigate();

  return (
    <div className='relative w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... select-none'>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full block'>
        <AppBar/>
        <div className='md:ml-[30%] ml-10'>
          <input 
          type="text"
          placeholder='Room id'
          className='px-4 py-2 rounded-md border-none outline-none bg-slate-800 text-white text-xl mb-4' />
          <button className=' ml-6 rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-gray-600 cursor-pointer text-gray-200 px-4 py-3 mt-5' onClick={() => navigate("/")}>Join room</button>
          </div>
        </div>
        </div>
      </div>
  )
}

export default JoinRoom