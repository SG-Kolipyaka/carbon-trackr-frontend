import React from 'react'
import {Route,Routes} from "react-router-dom"
import Homepage from './Homepage'


const AllRoutes = () => {
  return (
    <div> 
        <Routes>      
            <Route path="/" element={<Homepage/>} />
            <Route path="*" element={<h1>404 Error</h1>} />
        </Routes>
    </div>
  )
}

export default AllRoutes