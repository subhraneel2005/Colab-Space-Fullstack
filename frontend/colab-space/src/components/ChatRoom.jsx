import React, { useContext, useEffect } from 'react';
import UseContext from '../contexts/UseContext';

function ChatRoom() {
    const { fetchRoomData,username,randomID} = useContext(UseContext);

    useEffect(() => {
        fetchRoomData();
    },[]);

  return (
    <div>
        <h1 className='text-center text-4xl'>Chat Room</h1>
        <h1>{`Room ID: ${randomID}`}</h1>
        <p>{`Users: ${username}`}</p>
    </div>
  )
}

export default ChatRoom