import React, { useContext } from 'react';
import UseContext from '../contexts/UseContext';

function AppBar() {
    const {handleLogout} = useContext(UseContext);
  return (
    <div className='w-full bg-transparent absolute top-0 left-0 text-white text-xl py-2 px-6 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Colab Space</h1>
        <div className='bg-white text-blue-500 px-3 py-1 rounded-xl cursor-pointer hover:bg-gray-200' onClick={handleLogout}>Logout</div>
    </div>
  )
}

export default AppBar