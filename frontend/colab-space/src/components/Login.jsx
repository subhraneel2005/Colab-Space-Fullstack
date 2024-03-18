import React, { useContext } from 'react';
import UseContext from '../contexts/UseContext';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {

    const {username,setUsername, password, setPassword, handleLogin} = useContext(UseContext);

    const navigate = useNavigate();

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500'>
        <ToastContainer/>
        <div className='w-[350px] h-[450px] rounded-xl shadow-xl bg-gray-300 text-black text-xl flex justify-center items-center'>
            <div className='block ml-6'>
                <h1 className='text-2xl text-center mr-3 mb-6'>Login</h1>
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
                <p className='text-xl text-center mt-3'>New to Colab-Space <a className='underline  cursor-pointer decoration-green-700' onClick={() => navigate("/")}>Register</a></p>
                <button className='p-3 bg-blue-500 mt-6 rounded-xl text-white hover:bg-blue-800 cursor-pointer' onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login