import React from 'react';
import Navbar from './Navbar';
function Home(props) {
 return (
  <div>
     <Navbar/>
     <div className='container-fluid margin-left-'>
      <div className='row g-5 my-5'>
       <div className='col-md-md-3'>
        <div className='p-3 bg-white shadow-sm d-flex ju'>
         <h3 className='fs-2'>230</h3>
         <p className='fs-5'>Products</p>
        </div>
        <i className='bi bi-cart-plus p-3'></i>
       </div>
      </div>
     </div>
  </div>
 );
}

export default Home;