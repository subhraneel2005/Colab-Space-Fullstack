import React from 'react';
import {useNavigate} from "react-router-dom";
import AppBar from './AppBar';

function RoomChoice() {

    const navigate = useNavigate();

  return (
    <div className='relative w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... select-none'>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full block'>
        <AppBar/>
        <div className='md:ml-[37%] ml-10'>
          <button className='hover:bg-gray-500 ml-6 rounded-xl bg-gray-200 cursor-pointer text-black  px-4 py-3 mt-5' onClick={() => navigate("/createRoom")}>Create new room</button>
          <button className='hover:bg-gray-500 ml-6 rounded-xl bg-gray-200 cursor-pointer text-black px-4 py-3 mt-5' onClick={() => navigate("/joinRoom")}>Join a room</button>
          </div>
        </div>
        </div>
      </div>
  )
}

export default RoomChoice