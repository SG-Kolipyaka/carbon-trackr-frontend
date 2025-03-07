import React from 'react'
import {Route,Routes} from "react-router-dom"
import CarbonCalculator from '../Components/CarbonCalculator'


const AllRoutes = () => {
  return (
    <div> 
        <Routes>      
            <Route path="/" element={<CarbonCalculator/>} />
            <Route path="*" element={<h1>404 Error</h1>} />
        </Routes>
    </div>
  )
}

export default AllRoutes