import React from 'react'
import {useState, useEffect} from 'react';
import {FcManager} from 'react-icons/fc';
import "../register.css"

function Register() {
  const [formData, SetFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordconf: ''
  })

  const {name, email, password, passwordconf} = formData

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
        <FcManager /> Register
      </h1>
    </section>
    <section className='reg-form'>
    <p> Fill in information to create account</p>
      <form onSubmit={onSubmit}>
        <div class="form-group row">
        <div className='form-group col-md-6'>
        <label for='username' class="col-sm-2 col-form-label"> Username </label>
        <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter name" onChange={onChange} />
        </div>
        <div className='form-group col-md-6'>
        <label for='username' class="col-sm-2 col-form-label"> Email </label>
        <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter email" onChange={onChange} />
        </div>
        <div className='form-group col-md-6'>
        <label for='username' class="col-sm-2 col-form-label"> Password </label>
        <input type="password" className="form-control mb-2" id="password" name="password" value={password} placeholder="Enter password" onChange={onChange} />
        </div>
        <div className='form-group col-md-6'>
        <label for='username' class="col-sm-2 col-form-label"> Confirm Password </label>
        <input type="password" className="form-control mb-2" id="passwordconf" name="passwordconf" value={passwordconf} placeholder="Re-enter password" onChange={onChange} />
        </div>
        <div className='form-group col-md-6'>
          <button type="submit" className='btn btn-block'>
            Create your account
          </button>
        </div>
        </div>
      </form>
    </section>
  </>
}

export default Register