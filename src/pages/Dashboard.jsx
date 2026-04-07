import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'



const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen]=useState(false);
  return (
    <div className="bg-gray-100 text-black min-h-screen min-w-screen flex dark:bg-gray-900 dark:text-white "> 
       
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <MainContent setSidebarOpen={setSidebarOpen}/>
        
    </div>
  )
}

export default Dashboard