import React from 'react'
import { NavLink } from 'react-router-dom';


function Register() {
    
  return (
    <div>
        <div className="container shadow my-5">
            <div className="row justify-content-end">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center register-form order-2">
                    <h1 className="display-4 fw-bolder"> Register YourSelf </h1>
                    <p className="fw-bold text-center"> Enter Your Details To Register </p>
                    <h5 className="mb-4"> OR </h5>
                    <NavLink to="/login" className="btn btn-outline-dark rounded-pill pb-2 w-50" > <i className="fa-solid fa-right-to-bracket"> </i> Login </NavLink>
                </div>
                <div className="col-md-6 p-5 ">
                  
                    <form className="row g-3">
                            <div className="col-md-12">
                                <label htmlFor="name" className="form-label"> Name </label>
                                <input type="text" className="form-control" id="name" name="name"  autoComplete="off" />
                            </div>

                            
                            <div className="col-md-12">
                                <label htmlFor="email" className="form-label"> Email </label>
                                <input type="email" className="form-control" id="email" name="email" autoComplete="off"/>
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="password" className="form-label"> Password </label>
                                <input type="password" className="form-control" id="password" name="password" autoComplete="off"/>
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="gender" className="form-label"> Gender </label>
                                <input type="text" className="form-control" id="gender" name="gender"  autoComplete="off" />
                            </div>

                            <div className="col-md-12">
                                <label htmlFor="mobile" className="form-label"> Mobile Number </label>
                                <input type="number" className="form-control" id="mobile" name="mobile"  autoComplete="off" maxLength="10" />
                            </div>

                            <div className="col-12"> </div>
                            
                            <NavLink to="/" className="btn btn-outline-dark col-md-4 rounded-pill "> <i className="fa-solid fa-right-to-bracket"> </i> Create Profile  </NavLink>

                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register