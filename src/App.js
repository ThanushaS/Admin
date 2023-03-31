//import MenuItem from './components/MenuItem';
import './App.css';
import {useState} from 'react';
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Content from './components/Content';
import Container from './components/Container';
//import { Category, Dashboard } from '@mui/icons-material';
//import Content from './components/content';
//import { Container } from '@mui/system';
const App = () => {
  const [inactive, setInactive] = useState(false);

  return (
   <div className='App'>
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}/>
           <div className= {`Container ${inactive ? "inactive" : ""}`}>
              <Navbar/>

              <Container/>
      
           {/*   {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <h1>{menu.name}</h1>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}*/}
                
     
      
      
    
 {/*<Switch>
      <Route exact path={"/"}>
        <Dashboard/>
      </Route>
      <Route exact path={"/category"}>
        <Category/>
      </Route>
      <Route  path={"/category/web design"}>
              <Web-Design/>
            </Route>
            <Route  path={"/category/login form"}>
              <Loginfrom />
            </Route>
            <Route  path={"/category/card design"}>
              <CardDesign />
            </Route>
    
        </Switch>*/}
         </div>
        
    </Router>
    
    </div>
  );
};

export default App;