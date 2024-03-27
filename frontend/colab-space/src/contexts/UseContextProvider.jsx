import React, { useState } from 'react'
import UseContext from './UseContext'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from '../components/ErrorPage';

function UseContextProvider({children}) {

    const[socket, setSocket] = useState(null)
    let [randomID, setRandomID] = useState("");
    const[msg, setMsg] = useState("")
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[fullName, setFullName] = useState("");
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    const[roomData, setRoomData] = useState({});
    const[allRoomIds, setAllRoomIds] = useState([]);
    const [roomName, setRoomName] = useState("");


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

    const fetchRoomData = async() => {
        try {
            const response = await axios.get(`http://localhost:3000/:${roomName}`);
            setRoomData(response.data);
            toast.success("Entered room successfully");
        } catch (error) {
            console.log(error);
            toast.error("Error entering room")
        }
    }

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
    <UseContext.Provider value={{enterRoom,socket, setSocket,roomName, setRoomName,randomID,username,setUsername, fullName,setFullName, password, setPassword, handleRegister, handleLogin,handleLogout,fetchRoomData,setRoomData,allRoomIds}}>
        {children}
    </UseContext.Provider>
  )
}

export default UseContextProvider