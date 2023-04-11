import './navbar.css';
//import Logo from "../assets/Logo/logo.jpg";
import user from "../assets/user.jpg";
import { useState, useEffect } from "react";
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

const Navbar = ({Toggle}) => {
  return (
    <div className='navbar navbar-expand-lg   py-4 px-1'>
        <div>
            <div className=" item d-flex align-items-center">
                  <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" onClick={Toggle}></i>
            </div>
        </div>
        <div className="search-controller">
            <button className="search-btn">
                <i className="bi bi-search"></i>
            </button>
                  <input type="text" placeholder="Search..." />
        </div>
        <nav>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                      <div className="profile_name">John</div>
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
