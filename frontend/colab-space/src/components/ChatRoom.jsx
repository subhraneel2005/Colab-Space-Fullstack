import React, { useContext, useEffect } from 'react';
import UseContext from '../contexts/UseContext';

function ChatRoom() {
    const { roomName, username } = useContext(UseContext);

  return (
    <div>
        <h1 className='text-center text-4xl'>Chat Room</h1>
        
    </div>
  )
}

export default ChatRoom