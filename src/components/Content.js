import React,{useState} from 'react';
import "./content.css"
const Content = (props) => {
    const[inactive, setInactive]= useState(false);

    return (
        <div>
             <section class="home-section">
        <div className={`home-content ${inactive ? "inactive" : ""}`}>
          <i onClick={()=>{setInactive(!inactive);}}class='bi-list'></i>
          <span class="text">Drop Down Sidebar</span>
        </div>
      </section>
            
        </div>
    );
};

export default Content;