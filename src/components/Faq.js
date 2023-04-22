import React from 'react'
import { NavLink } from 'react-router-dom'

function Faq() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/images/faq.png" alt="faq" className="ml-5 mt-5" style={{width:"35rem"}}/>
                    </div>
                    <div className="col-md-5 mx-5">
                        <h1 className="display-6 mb-2"> Frequently <b> Asked </b> Questions </h1>
                        <hr className="w-50" />
                        <p className="lead mb-4 j">
                            <strong> Ques 1. </strong> How much does it take to prepare food? <br/>
                            <strong> Ans 1. </strong> 45 minutes is our maximum time to prepare food.
                        </p>
                        <p className="lead mb-4 j">
                            <strong> Ques 2. </strong> Does Foodie's Zone accept online orders? <br/>
                            <strong> Ans 2. </strong> Yes we accept online orders.
                        </p>
                        <p className="lead mb-4 j">
                            <strong> Ques 3. </strong> Does Foodie's Zone is India's largest food delivery site? <br/>
                            <strong> Ans 3. </strong> Yes, Foodie's Zone is India's largest food delivery site .
                        </p>
                        <p className="lead mb-4 j">
                            <strong> Ques 4. </strong> While delivering food does food remains hot? <br/>
                            <strong> Ans 4. </strong> Yes, we deliver food in thermal cases so that it remains fresh and hot.
                        </p>
                        <p className="lead mb-4 j">
                            <strong> Ques 5. </strong> How much does it take for delivering the food? <br/>
                            <strong> Ans 5. </strong> 45 minutes is our maximum time to deliver the food.
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

export default Faq