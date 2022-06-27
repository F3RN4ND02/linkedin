import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from '../src/imgs/linkedin.svg'
import avr from '../src/imgs/087.JPG'
import HeaderOption from './HeaderOption';

const Header = () => {
  return (
    <div className='header'>
        <div className="header_left">
            <img src={img} alt="" />
            <div className="header_search">
                <SearchIcon/>
                <input type="text"/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar={avr} title='me'/>

        </div>
    </div>
  )
}

export default Header