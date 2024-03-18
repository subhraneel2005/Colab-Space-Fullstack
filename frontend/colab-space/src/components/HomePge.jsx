import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext';

function HomePge() {
  const {handleLogout} = useContext(UseContext);
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500'>

        <div onClick={handleLogout}>Logout</div>
    </div>
  )
}

export default HomePge