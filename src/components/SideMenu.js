import React,{useEffect,useState} from 'react';
import MenuItem from './MenuItem';
import user from "../assets/user.jpg";

export const menuItems=[
  {
   name:"Dashboard",
   exact:true,
    to:"/dashboard.html",
    iconClassName:"bi bi-grid",
    iconClosedClassName:"bi-chevron-down arrow",
    iconOpenedClassName:'bi-chevron-compact-right',
    subMenuBlank:"Dashboard",

    subMenus:[
      { name:" Manage My Tournaments", to:"/dasboard/ManageMyTournaments"},
      { name:"Manage Team/ Organisation", to:"/dasboard/ManageTeam/Organisation"},
      { name:"Manage Services", to:"/dasboard/ManageServices"},
    ],
  },
 {
  name:"Category",
  exact:true,
  to:`./category`,
  iconClassName:"bi bi-collection",
  iconClosedClassName:"bi-chevron-down arrow",
  iconOpenedClassName:'bi-chevron-compact-right',
  subMenuBlank:"Category",

  subMenus: [
    { name: "Web Design", to: "/category/webdesign" },
    { name: "Login From", to: "/category/loginform" },
    { name: "Card Design", to: "/category/carddesign" },
  ],
 },
 {
  name: "Posts",
  exact: true,
  to: `/posts`,
  iconClassName: "bi bi-bar-chart-line",
  iconClosedClassName:"bi-chevron-down arrow",
  iconOpenedClassName:'bi-chevron-compact-right',
  subMenuBlank:"Posts",

  subMenus: [
    { name: "HTML", to: "/posts/html" },
    { name: "JS", to: "/posts/js" },
    { name: "PHP", to: "/posts/php" },
  ],
},
];

const SideMenu = (props) => {
    const[inactive, setInactive]=useState(false);

    useEffect(() => {
      if (inactive) {
        removeActiveClassFromSubMenu();
      }
      props.onCollapse(inactive);
    }, [inactive]);
  
    const removeActiveClassFromSubMenu = () => {
      document.querySelectorAll(".sub-menus").forEach((el) => {
        el.classList.remove("active");
      });
    };
    useEffect(() => {
      let menuItems = document.querySelectorAll(".link-name");
      menuItems.forEach((el) => {
        el.addEventListener("click", (e) => {
          const next = el.nextElementSibling;
          removeActiveClassFromSubMenu();
          menuItems.forEach((el) => el.classList.remove("active"));
          el.classList.toggle("active");
          console.log(next);
          if (next !== null) {
            next.classList.toggle("active");
          }
        });
      });
    }, [inactive]);
    
    return (
    <div className=' wrapper-fluid position-relative d-flex p-0'>
      <div className={`sidebar ${inactive ? "inactive" : ""}`}id="menu-toggle" >
    
        <div className="logo-details">
          <i  className='bi-bootstrap'></i>
         
          </div>
          <div className=" left">
                  <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"onClick={()=>{setInactive(!inactive);}} ></i>
            </div>
          <ul className="nav">
            {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              linkName={menuItem.LinkName}
              subMenuBlank={menuItem.subMenuBlank}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              iconClosedClassName={menuItem.iconClosedClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
            {/*<li className='list-group list-group-flush my-3'>
                    <a href="dashboard.html">
                      <i className="bi bi-grid fs-5 me-2"></i>
                    <span className="link-name fs-5">Dashboard</span>
                    </a>
                    <ul className="sub-menu blank">
                    <li><a class="link-name" href="">Dashboard</a></li>
                    </ul>
                </li>
                <li>
                  <div className="icon">
                    <a href="#">
                      <i className='bx bx-collection'></i>
                      <span className="link-name">Category</span>
                    </a>
                    <i className='bx bxs-chevron-down arrow'></i>
                  </div>
                  <ul className="sub-menu">
                    <li><a className="link-name" href="#">Category</a></li>
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">Card Design</a></li>
                    <li><a href="#">Login Form</a></li>
                  </ul>
                </li>*/}

   
      <li>
        <div class="p-del">
          <div class="profile-content">
            <img src={user} alt="user"/>
          </div>
        
        <div class="name-job">
          <div class="profile_name">John</div>
          <div class="job">Web Desginer</div>
        </div>
        <i onClick={()=>{setInactive(!inactive);}} class='bi bi-box-arrow-left'></i>
      </div>
      </li>
      
    </ul>
     </div>
     </div>
     
                
    
    );
};

export default SideMenu;