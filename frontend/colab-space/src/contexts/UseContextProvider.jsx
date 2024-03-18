import React, { useState } from 'react'
import UseContext from './UseContext'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UseContextProvider({children}) {

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
        } catch (error) {
            toast.error("Username already exists");
        }
    }

    const handleLogin = async() =>  {
    try {
        const res = await axios.post("http://localhost:3000/login", {
            username,password
        });
        toast.success("Login successfull");
    } catch (error) {
        toast.error("Invalid credentials");
    }
    }

  return (
    <UseContext.Provider>
        {children}
    </UseContext.Provider>
  )
}

export default UseContextProvider