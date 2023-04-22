import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div>
      <div className="container shadow my-5">
            <div className="row">
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center login-form">
                    <h1 className="display-4 fw-bolder"> Welcome Back </h1>
                    <p className="fw-bold text-center"> Enter Your Credentials To Login </p>
                    <h5 className="mb-4"> OR </h5>
                    <NavLink to="/register" className="btn btn-outline-dark rounded-pill pb-2 w-50" > <i class="fa-solid fa-user-plus ms-2"></i> Create Profile </NavLink>
                </div>
                <div className="col-md-6 p-5">
                  <h1 className="display-6 fw-bolder mb-5"> Outfit Zone Login </h1>
                  <form class="row g-3" >
                        <div class="col-md-10">
                            <label for="loginemail" class="form-label"> Email </label>
                            <input type="email" class="form-control" id="loginemail" name="loginemail" autoComplete="off"/>
                        </div>
                        <div class="col-md-10">
                            <label for="loginpass" class="form-label"> Password </label>
                            <input type="password" class="form-control" id="loginpass" name="loginpass" autoComplete="off" />
                        </div>
                        <NavLink to="/" className="btn btn-outline-dark col-md-4 rounded-pill mt-4" > <i className="fa-solid fa-right-to-bracket"> </i> Login </NavLink>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login