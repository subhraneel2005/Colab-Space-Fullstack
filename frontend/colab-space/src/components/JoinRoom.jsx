import React, { useContext, useEffect } from 'react'
import {useNavigate} from "react-router-dom";
import AppBar from './AppBar';
import UseContext from '../contexts/UseContext';

function JoinRoom() {

 

  return (
    <div className='relative w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... select-none'>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full block'>
        <AppBar/>
        <div className='md:ml-[30%] ml-10'>
          <input 
          type="text"
          
          placeholder='Enter Room Id'
          className='px-4 py-2 rounded-md border-none outline-none bg-slate-800 text-white text-xl mb-4' />
          <button className=' ml-6 rounded-xl bg-gray-200 cursor-pointer text-black px-4 py-3 mt-5'>Join room</button>
          </div>
        </div>
        </div>
      </div>
  )
}

export default JoinRoom