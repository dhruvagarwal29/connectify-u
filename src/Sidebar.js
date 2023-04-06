import React from 'react'
import "./Sidebar.css"

import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
// // or
// import { Avatar } from '@mui/material';
// import { Avatar } from '@mui/material'


function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    );

  return (

    
    <div className='sidebar'>
        <div className='sidebar__top'>
        <img src='https://images.unsplash.com/photo-1679673177212-8a011a4f86f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80' alt=' ' />
        <Avatar src={user.photoURL} className="sidebar__avatar" >
            {user.email[0].toUpperCase()}
        </Avatar>
        {/* <h2>{user.displayName[0].toUpperCase() + user.displayName.slice(1)}</h2> */}
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>
        {/* <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">3000</p>
            </div>
            <div className='sidebar__stat'>
                <p>Connections</p>
                <p className="sidebar__statNumber">122</p>
            </div>
        </div> */}

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("ReactJs")}
            {recentItem("Coding")}
            {recentItem("Javascript")}
            {recentItem("Looking for a Job")}
            {recentItem("Programming")}
            {recentItem("Software Engineering ")}
        </div>
    </div>
  )
}

export default Sidebar