import React from 'react'
import './Sidebar.css'
import Avatar from '@mui/material/Avatar';
import bg from '../src/imgs/bg.JPG'

function Sidebar() {

    const recentItem =(topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src={require('../src/imgs/bg.JPG')} alt="" />
            <Avatar className='sidebar_avatar'/>
            <h2>Fernando Martinez</h2>
            <h4>Job.Titleeeeeeeeeeeeeee</h4>
        </div>
        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar-statNumber'>2.254</p>

            </div>
            <div className="sidebar_stat">
            <p>Views on posts</p>
                <p className='sidebar-statNumber'>2.854</p>
            </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem('Python')}
            {recentItem('UX/UI')}
            {recentItem('Support Engineer')}
            {recentItem('AI developer')}
            {recentItem('Mine')}
        </div>
    </div>
  )
}

export default Sidebar