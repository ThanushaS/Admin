import React from 'react';
import './container.css'
const Container = () => {
    return (
    
         <div>  
             <div className="container">
                <div className="row g-5 my-0">
                    <div className="col-md-2">
                        <h2 className="fs-5">Dashboard</h2>
                        <div className="controller">
                            <button className="btn">
                                <i className="bi bi-search"></i>
                            </button>
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div> 
                </div>
                
                <hr className="hr" />
                  
             <div className="container-fluid ">
             <div className=" row g-4 my-5">
                    <div className="col-md-2">
                        <div className=" p-5 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">name</h3>
                                <p className="fs-5">price</p>
                            </div>
                            <i className="bi bi-grid"></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                    <div className=" p-5 bg-white shadow-sm d-flex justify-content-around align-items-center rounded ">
                            <div>
                                <h3 className="fs-2">cccc</h3>
                                <p className="fs-5">cccc</p>
                            </div>
                            <i className="">ccc</i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="p-5 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">kkkkkk</h3>
                                <p className="fs-5">lojiji</p>
                            </div>
                            <i className="">ghvgh</i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="p-5 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">eeeeeee</h3>
                                <p className="fs-5">wwwwwwww</p>
                            </div>
                            <i className="">wwwww</i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="p-5 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">vvv</h3>
                                <p className="fs-5">vvvv</p>
                            </div>
                            <i className=""></i>
                        </div>
                    </div>
                </div>
                <div>
                        <div className="row g-4 my-5">
                    <div className="col-md-2">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2"></h3>
                                <p className="fs-5"></p>
                            </div>
                            <i className=""></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2"></h3>
                                <p className="fs-5"></p>
                            </div>
                            <i className=""></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2"></h3>
                                <p className="fs-5"></p>
                            </div>
                            <i className=""></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2"></h3>
                                <p className="fs-5"></p>
                            </div>
                            <i className=""></i>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2"></h3>
                                <p className="fs-5"></p>
                            </div>
                            <i className=""></i>
                        </div>
                    </div>
                </div>
                </div>

                <div className="row my-5">
                    <h3 className="fs-4 mb-3"></h3>
                    <div className="col">
                        <table className="table bg-white rounded shadow-sm  table-hover">
                          
                            
                        </table>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Container;