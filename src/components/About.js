import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/about.webp" alt="about" className="w-100 mt-5"/>
                    </div>
                    <div className="col-md-5 mx-5">
                        <h3 className="fs-5 mb-0"> About Us </h3>
                        <h1 className="display-6 mb-2"> Who <b> we </b> are? </h1>
                        <hr className="w-50" />
                        <p className="lead mb-4 j">
                        Food plays a big part when it comes to choosing an area to rent an apartment or a hotel room. So there comes your <strong> <i> `Foodie's Zone` </i>. </strong> <br/> <br/> 

                        Customers use our platform to search and discover restaurants, read reviews and view photos, order food delivery, book a table and make payments while dining-out at restaurants. <br/> <br/>

                        On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. 
                        </p>
                        <NavLink to="/register" className="btn btn-dark rounded-pill px-4 py-2"> Get Started </NavLink>
                        <NavLink to="/contact" className="btn btn-outline-dark rounded-pill px-4 py-2 ms-2"> Contact Us </NavLink>

                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About