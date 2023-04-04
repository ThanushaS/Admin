import './navbar.css';
//import Logo from "../assets/Logo/logo.jpg";
import user from "../assets/user.jpg";
import { useState, useEffect } from "react";
//import {useRef} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Navbar = () => {
  const[isMobile, setIsMobile]=useState(false);



  
  return (
    <div className='navbar navbar-expand-lg navbar-light  py-4 px-0 '>
        <div>
            <div className=" item d-flex align-items-center">
                  <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" ></i>
            </div>
        </div>
        <div className="search-controller">
            <button className="search-btn">
                <i class="bi bi-search" ></i>
            </button>
                  <input type="text" placeholder="Search..." />
        </div>
        <nav>
        <button className="navbar-toggler" >
          {isMobile ? (
             <i className='fas fa-times'></i>):(<i className='fas fa-bars'></i>)}
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={isMobile ? "navbar-nav-mobile" : "navbar-nav"}>
              <div className='items'>
                <div className="item">
                  <i className="bi bi-envelope-fill"></i>
                  <div className='counter'></div>            
                </div>
                <div className="item">
                  <i className="bi bi-bell-fill"></i>
                  <div className='counter'></div>             
                </div>  
                  <div className="item">
                      <i className="bi bi-gear-fill"></i>
                  </div>
                  <div className="item">
                    <img src={user} alt="user" className="avatar"/>
                    <div className="name-job">
                      <div class="profile_name">John</div>
                      <div className="mail">cod@gmail.com</div>
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
