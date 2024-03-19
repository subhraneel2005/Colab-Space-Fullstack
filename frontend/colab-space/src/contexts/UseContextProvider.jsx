import React, { useState } from 'react'
import UseContext from './UseContext'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UseContextProvider({children}) {

    const[msg, setMsg] = useState("")
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[fullName, setFullName] = useState("");
    const[isAuthenticated, setIsAuthenticated] = useState(false);

    const handleRegister = async() => {
        try {
            const res = await axios.post("http://localhost:3000/register", {
                fullName, username, password
            });
            toast.success(res.data.message);
            window.location = "/roomChoice";
        } catch (error) {
            toast.error("Username already exists");
        }
    }

    const handleLogin = async() =>  {
    try {
        const res = await axios.post("http://localhost:3000/login", {
            username,password
        });
        setMsg(res.data.message)
        toast.success("Login successfull");
        window.location = "/roomChoice";
    } catch (error) {
        toast.error("Invalid credentials");
    }
    }

    const handleLogout = async() => {
        try {
         await axios.post("http://localhost:3000/logout");
         window.location = '/';
         toast.success("Logged out successfully");
        } catch (error) {
         toast.error("Error logging out");
        }
       }

  return (
    <UseContext.Provider value={{username,setUsername, fullName,setFullName, password, setPassword, handleRegister, handleLogin,handleLogout}}>
        {children}
    </UseContext.Provider>
  )
}

export default UseContextProvider