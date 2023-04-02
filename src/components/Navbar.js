import './navbar.css';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

//import Logo from "../assets/Logo/logo.jpg";
import user from "../assets/user.jpg";

import { useState, useEffect } from "react";

const Navbar = () => {
    const[inactive, setInactive]= useState(false);
  
  return (
    <div className={`navbar navbar-expand-lg navbar-light  py-4 px- ${inactive?"inactive":""}`}>
            <div>
              <div class=" item d-flex align-items-center">
                <i onClick={()=>{setInactive(!inactive);}} class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
              </div>
              </div>
              <div className="search-controller">
                  <button className="search-btn">
                    <i class="bi bi-search"></i>
                  </button>
                <input type="text" placeholder="Search..." />
              </div>
      <nav>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <div className='items'>
                <div className="item">
                    <i class="bi bi-envelope-fill"></i>
                    <div className='counter'></div>            
                </div>
                <div className="item">
                    <i class="bi bi-bell-fill"></i>
                    <div className='counter'></div>             
                </div>  
                <div className="item">
                    <i class="bi bi-gear-fill"></i>
                </div>
                <div className="item">
                  <img src={user} alt="user" className="avatar"/>
        <div class="name-job">
          <div class="profile_name">John</div>
          <div class="job">cod@gmail.com</div>
        </div>
                </div>
                </div>
              </ul>
        </div>
      </nav>
    </div>
          
  );
};

export default Navbar;
