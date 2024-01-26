import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Profile from '../components/Profile'
import DashSidebar from '../components/DashSidebar'

function Dashboard() {
    const location = useLocation()

    const [tab, setTab] = useState('')

    useEffect( () => {
        const urlParams = new URLSearchParams(location.search)
        const tabFromURL = urlParams.get('tab')
        if (tabFromURL){
            setTab(tabFromURL)
        }
    },[location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
        <div className="md:w-56">
            <DashSidebar/>
        </div>
        {/* Profile */}
        <div className="">
            {tab === 'profile' && <Profile/>}
            
        </div>
    </div>
  )
}

export default Dashboard