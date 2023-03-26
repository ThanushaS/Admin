import React, {useRef, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
const MenuItem = (props) => {
    const {name, subMenus, iconClassName, iconClosedClassName, onClick, to, exact, linkName, subMenuBlank}= props;
    const[expand, setExpand,]= useState(false);
    return (
        <li  onClick={props.onClick}>
            <Link exact to={to} onClick={()=>{
               setExpand((e) => !e); 
            }} className={`menu-item`}>
                <div className='icon'>
                    <i class={iconClassName}></i>
              
                <span className='link-name'>{name}</span>
                <i className={iconClosedClassName}></i>
                <ul className='sub-menu blank'>{name}</ul>
                </div>
            </Link>
            {subMenus && subMenus.length > 0 ? (
                <ul className={`sub-menu`}>
                    {subMenus.map((menu, index) => (
                        <li key = {index}>
                            <NavLink to={menu.to}>{menu.name}</NavLink>
                        </li>
                    ))}
                </ul>
                
            ): null}

        </li>
    );
};

export default MenuItem;