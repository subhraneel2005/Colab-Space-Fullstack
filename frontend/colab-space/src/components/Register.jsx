import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext';

function Register() {
    const {username,setUsername, fullName,setFullName, password, setPassword, handleRegister} = useContext(UseContext);

  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='w-[300px] h-[450px] rounded-xl shadow-xl bg-gray-300 text-black text-xl flex justify-center items-center'>
            <div className='block ml-6'>
                <h1 className='text-2xl text-center mr-3 mb-6'>Register</h1>
                <input 
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                placeholder='Fullname'
                className='px-4 py-2 rounded-md border-none outline-none bg-slate-800 text-white text-xl mb-4' />
                <input 
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder='Username'
                className='px-4 py-2 rounded-md border-none outline-none bg-slate-800 text-white text-xl mb-4' />
                <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Password'
                className='px-4 py-2 rounded-md border-none outline-none bg-slate-800 text-white text-xl mb-4' />

                <button className='p-3 bg-blue-500 rounded-xl text-white hover:bg-blue-800 cursor-pointer' onClick={handleRegister}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register