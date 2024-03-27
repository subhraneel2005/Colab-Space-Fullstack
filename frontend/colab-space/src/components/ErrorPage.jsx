import React from 'react';
import "./ErrorPage.css";

function ErrorPage() {
    const goBAck = () => {
        window.location = "/createRoom"
    }
  return (
    <div className="container">
        <h1>Page Not Found.</h1>
        <h1> <span class="ascii">╯°□°）╯︵ ┻━┻</span></h1>
        <a onClick={goBAck} className='btn'>Go back</a>
    </div>
  )
}

export default ErrorPage