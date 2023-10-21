import React from 'react'
import MainDashboard from './MainDashboard'
import Sidebar from './Sidebar'
import "./MainComponent.css"
import RightSide from '../RightSide/RightSide'


const MainComponent = () => {
    return (
        // <div className="firstApp">
        <div className='secondApp'>
            
                <Sidebar/>
            
                <MainDashboard/>

                <RightSide/>

                
            
        </div>
    
    // </div>
    )
}

export default MainComponent
