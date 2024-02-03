import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashProfile from '../components/DashProfile'
import DashSidebar from '../components/DashSidebar'
import DashPost from '../components/DashPost'
import DashUsers from '../components/DashUsers'


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
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashProfile />}

      {/* Posts */}
      {tab === "posts" && <DashPost />}

      {/* Posts */}
      {tab === "users" && <DashUsers />}
    </div>
  );
}

export default Dashboard