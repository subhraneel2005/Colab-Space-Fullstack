import React, { useContext, useState } from 'react';
import AppBar from './AppBar';
import UseContext from '../contexts/UseContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './ErrorPage';


function CreateRoom() {

  const [allRoomIds, setAllRoomIds] = useState([]);
  const { roomName, setRoomName } = useContext(UseContext);


  const enterRoom = () => {
    if(!roomName){
      toast.error("Please input a Room Name!");
      return <ErrorPage/>;
    }
    else{
      toast.success("Room created successfully");
      window.location= `chat/${roomName}`
    }
  }
  return (
    <div className='relative w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>
      <ToastContainer/>
        <div className='w-full h-full flex justify-center items-center'>
        <div className='w-full block'>
        <AppBar/>
        <div className='md:ml-[30%] ml-10'>
          <input 
          type="text"
          value={roomName}
          placeholder='Enter Room Id'
          onChange={(e) => setRoomName(e.target.value)}
          className='px-4 py-2 rounded-md border-none outline-none bg-slate-800 text-white text-xl mb-4' />
          <button className=' ml-6 rounded-xl bg-gray-200 cursor-pointer text-black px-4 py-3 mt-5' onClick={enterRoom}>Create Room</button>
          </div>
        </div>
        </div>
      </div>
  )
}

export default CreateRoom