import React, { useContext } from 'react';
import UseContext from '../contexts/UseContext';

function Dashboard() {
    const {handleLogout} = useContext(UseContext);
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>
      <div onClick={handleLogout}>Logout</div> 
        <div className='w-[350px] h-[400px] flex justify-center items-center' style={{border: "2px solid black"}}>
          <div className='block'>
          
          </div>
        </div>
    </div>
  )
}

export default Dashboard