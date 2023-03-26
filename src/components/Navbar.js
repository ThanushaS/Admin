import './navbar.css'
//import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
//import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

//import Logo from "../assets/Logo/logo.jpg";
import user from "../assets/user.jpg";
//import SideMenu from './SideMenu';
//import MenuItem from './MenuItem';
import { useState } from "react";

const Navbar = (props) => {
	const [showmenu, setShowmenu] = useState(false)

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
            <div className='menu'>
            <div className='menu-line'></div>
            <div className='menu-line'></div>
            <div className='menu-line'></div>
            </div>
          </div>
  );
};

export default Navbar;
