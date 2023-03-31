import React,{useEffect,useState} from 'react';
import MenuItem from './MenuItem';
import user from "../assets/user.jpg";


export const menuItems=[
  {
   name:"Dashboard",
   exact:true,
    to:"/",
    iconClassName:"bi bi-grid",
    subMenuBlank:[
      { name:"Dashboard", to:"/dasboard"},
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
      <div className='wrapper'>
          <div className={`sidebar ${inactive ? "inactive" : ""}`}>
            <div className="logo-details">
          <i onClick={()=>{setInactive(!inactive);}} class='bi-bootstrap'></i>
              <span  class="logo_name">CodingStyle</span>
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
              {/*} <li className='list-group list-group-flush my-3'>
                    <a href="#">
                      <i class="bi bi-grid"></i>
                    <span class="link-name">Dashboard</span>
                    </a>
                    <ul class="sub-menu blank">
                    <li><a class="link-name" href="">Dashboard</a></li>
                    </ul>
                </li>
                <li>
                  <div class="icon">
                    <a href="#">
                      <i class='bx bx-collection'></i>
                      <span class="link-name">Category</span>
                    </a>
                    <i class='bx bxs-chevron-down arrow'></i>
                  </div>
                  <ul class="sub-menu">
                    <li><a class="link-name" href="#">Category</a></li>
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