import React, { useContext, useState } from 'react';
import AppBar from './AppBar';
import UseContext from '../contexts/UseContext';


function CreateRoom() {
   
  const [roomName, setRoomName] = useState("")
  const {generateRandomID, randomID} = useContext(UseContext);

  return (
    <div className='relative w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... select-none'>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full block'>
        <AppBar/>
        <div className='md:ml-[30%] ml-10'>
          <input 
          type="text"
          placeholder='Room name'
          onChange={(e) => setRoomName(e.target.value)}
          className='px-4 py-2 rounded-md border-none outline-none bg-slate-800 text-white text-xl mb-4' />
          <button className=' ml-6 rounded-xl bg-gray-200 cursor-pointer text-black px-4 py-3 mt-5' onClick={generateRandomID}>Generate room id</button>
          </div>
          <div className='block mt-20 overflow-hidden'>
            <h1 className='text-center text-white text-3xl'>Room Details: </h1>
            <h1 className='select-auto text-center text-xl text-gray-200'>{`Room Name: ${roomName}`}</h1>
            <h1 className='text-center text-gray-200 text-xl'>{`Room ID: ${randomID}`}</h1>
          </div>
        </div>
        </div>
      </div>
  )
}

export default CreateRoom