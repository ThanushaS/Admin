import './navbar.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

//import Logo from "../assets/Logo/logo.jpg";
import user from "../assets/user.jpg";

import { useState, useEffect } from "react";

const Navbar = () => {

  
  return (
   
    <div className="navbar">
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>
	 
          {/*<div className="search">
            <input type="text" placeholder="search..." />
            <SearchOutlinedIcon/>
          </div>*/}
           <div className='items'>
            <div className="item">
                <NotificationsNoneOutlinedIcon className="icon"/> 
                <div className='counter'>2</div>             
            </div>
            <div className="item">
                <MailOutlineOutlinedIcon className="icon"/>  
                <div className='counter'>3</div>            
            </div>
            <div className="item">
                <Person2OutlinedIcon className="icon"/>
                <div className='counter'>1</div>            
            </div>
            <div className="item">
                <DarkModeOutlinedIcon className="icon"/>
            </div>
            <div className="item">
            <img src={user} alt="user" 
              className="avatar"
              />
                </div>
            </div>
            <div className='menu' >
            <i className='bi bi-list'></i>
            </div>
          </div>
          
  );
};

export default Navbar;
