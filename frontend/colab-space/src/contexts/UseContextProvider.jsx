import React from 'react'
import UseContext from './UseContext'

function UseContextProvider({children}) {
  return (
    <UseContext.Provider>
        {children}
    </UseContext.Provider>
  )
}

export default UseContextProvider