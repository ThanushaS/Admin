import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
//import Logo from "../assets/Logo/logo.jpg";
import user from "../assets/user.jpg";
import { useState, useEffect } from "react";
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
function NavScroll() {
  const [isActive, setActive] = useState("false");
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

 
  const[inactive, setInactive]=useState(false);

  return (
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
       
            </Navbar.Brand>
            <Nav.Link href="#action1">
            <div className="search-controller">
            <button className="search-btn">
                <i className="bi bi-search"></i>
            </button>
                  <input type="text" placeholder="Search..." />
        </div>
            </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="view me-auto my-4 my-lg-0 "
            style={{ maxHeight: '100%' }}
            navbarScroll
          >
        
            <Nav.Link href="#action2">
            <div className="item">
                  <i className="bi bi-envelope-fill"></i>
                  <div className='counter'></div>            
                </div>
            </Nav.Link>
            <Nav.Link href="#action2">
            <div className="item">
                  <i className="bi bi-bell-fill"></i>
                  <div className='counter'></div>             
                </div>
            </Nav.Link>
            <Nav.Link href="#action2">
            <div className="item">
                      <i className="bi bi-gear-fill"></i>
                  </div>
            </Nav.Link>
           
            <Nav.Link href="#" disabled>
        
            </Nav.Link>
         
          <div className="item">
                    <img src={user} alt="user" className="avatar"/>
                    <div className="profile-details">
                      <div className="profile_name">John</div>
                      <div className="mail">cod@gmail.com</div>
                    </div>
                  
                  </div>
                  </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScroll;