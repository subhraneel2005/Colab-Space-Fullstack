import React from 'react';
import "./Loader.css";

function Loader() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500'>
        <div className='w-full h-full flex justify-center items-center'>
            <div class="dot-spinner">
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
                <div class="dot-spinner__dot"></div>
            </div>
        </div>
    </div>
  )
}

export default Loader