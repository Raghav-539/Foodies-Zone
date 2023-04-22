import React from 'react'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
        <footer id="footer" className="text-dark">

            <div className="container">
                <hr></hr>
                <div className="py-5">
                    <div className="row">
                        <div className="col-3">
                            <h4> Foodie's Zone  </h4>
                        </div>

                        <div className="col-3">
                            <h5> Need Help? </h5>
                            <ul className="nav flex-column"> 

                                <li className="nav-item mb-2">
                                    <NavLink to="/about" className="nav-link p-0 text-dark"> About Us </NavLink> 
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/login" className="nav-link p-0 text-dark"> Sign In </NavLink> 
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/register" className="nav-link p-0 text-dark"> Register </NavLink> 
                                </li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5> Company </h5>
                            <ul className="nav flex-column"> 

                                <li className="nav-item mb-2">
                                    <NavLink to="/" className="nav-link p-0 text-dark"> Home </NavLink> 
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/" className="nav-link p-0 text-dark"> Features </NavLink> 
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/faq" className="nav-link p-0 text-dark"> FAQ's </NavLink> 
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-2">
                            <h5> Privacy & You </h5>
                            <ul className="nav flex-column"> 

                                <li className="nav-item mb-2">
                                    <NavLink to="/" className="nav-link p-0 text-dark"> Terms of Use </NavLink> 
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/" className="nav-link p-0 text-dark"> Privacy Policy </NavLink> 
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink to="/contact" className="nav-link p-0 text-dark"> Feedback & Rating </NavLink> 
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                            <p>  <i class="fa-sharp fa-solid fa-copyright"></i>Fodie's Zone 2023, All rights reserved @ Raghav Gupta </p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <NavLink to="#" className="link-dark"> <i class="fa-brands fa-facebook fa-2x"></i> </NavLink>
                                </li>
                                <li className="ms-3">
                                    <NavLink to="#" className="link-dark"> <i class="fa-brands fa-instagram fa-2x"></i> </NavLink>
                                </li>
                                <li className="ms-3">
                                    <NavLink to="#" className="link-dark"> <i class="fa-brands fa-twitter fa-2x"></i> </NavLink>
                                </li>
                                <li className="ms-3">
                                    <NavLink to="#" className="link-dark"> <i class="fa-brands fa-github fa-2x"></i> </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer