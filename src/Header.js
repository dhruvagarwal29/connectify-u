import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';
// import logo from './ConnectifyLogos/logo-transparent-png.png'
import logo1 from './ConnectifyLogos/logo.png'
function Header() {


  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo1} alt='Connectify Logo' />

            <div className='header__search'>
                <SearchIcon />
                <input placeholder = "Search" type="text" />
            </div>
        </div>
        
        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={SupervisorAccountIcon} title="Our Network" />
            {/* <HeaderOptions Icon= {BusinessCenterIcon} title= "Jobs" /> */}
            <HeaderOptions Icon= {ChatIcon} title= "Messaging" />
            <HeaderOptions Icon= {NotificationsIcon} title= "Notifications" />
            {/* <HeaderOptions avatar={avatarImage} title="me" /> */}
            <HeaderOptions //avatar='https://media.licdn.com/dms/image/C5603AQGjWEyrykDwLg/profile-displayphoto-shrink_800_800/0/1653589684482?e=1685577600&v=beta&t=zYoBTV9rUSyjFIWdpha5I2dp3Ewa2A-o5f_twvigT6E' 
            avatar={true}
            title="Sign Out" 
            onClick={logOutOfApp}
            />
        </div>

    </div>
  )
}

export default Header