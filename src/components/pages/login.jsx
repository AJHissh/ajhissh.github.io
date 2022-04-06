import '../styles/login.css';
import {FcManager} from 'react-icons/fc';
import {Link} from 'react-router-dom';
import React from 'react'
import {useState, useEffect} from 'react';


function Login() {
  const [formData, SetFormData] = useState({
    email: '',
    password: '',
    passwordconf: ''
  })

  const {email, password, passwordconf} = formData

  const onChange = (e) => {
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return <>
    <section className='heading'>
      <h1>
        <FcManager /> Login
      </h1>
    </section>
    <section className='reg-form'>
    <p> Login to your account </p>
      <form onSubmit={onSubmit}>
        <div class="form-group row">
        <div className='form-group col-md-6'>
        <label for='username' class="col-sm-2 col-form-label"> Email </label>
        <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter your email" onChange={onChange} />
        </div>
        <div className='form-group col-md-6'>
        <label for='username' class="col-sm-2 col-form-label"> Password </label>
        <input type="password" className="form-control mb-2" id="password" name="password" value={password} placeholder="Enter password" onChange={onChange} />
        </div>
        <div className='form-group col-md-6' id="passconf-form">
        <label for='username' class="col-sm-2 col-form-label"> Confirm Password </label>
        <input type="password" className="form-control mb-2" id="passwordconf" name="passwordconf" value={passwordconf} placeholder="Re-enter password" onChange={onChange} />
        </div>
        <div className='form-group col-md-6'>
          <button type="submit" className='btn btn-block' id="btn1">
            Login
          </button>
          <Link to="/register">
          <button type="submit" className='btn btn-block' id="btn2">
            Register
          </button>
          </Link>
            <h6>" Not functional when viewing from GitHub Pages "</h6>       
        </div>
        </div>
      </form>
    </section>
  </>
}
  

export default Login;