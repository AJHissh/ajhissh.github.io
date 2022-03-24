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

  const onChange = () => {}

  return <>
    <section className='heading'>
      <h1>
        <FcManager /> Register
      </h1>
    </section>
    <section className='reg-form'>
    <p> Fill in information to create account</p>
      <form>
        <div className='form-group'>
        <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter name" onChange={onChange} />
        </div>
        <div className='form-group'>
        <input type="text" className="form-control" id="email" name="email" value={email} placeholder="Enter email" onChange={onChange} />
        </div>
        <div className='form-group'>
        <input type="text" className="form-control" id="password" name="password" value={password} placeholder="Enter password" onChange={onChange} />
        </div>
        <div className='form-group'>
        <input type="text" className="form-control" id="passwordconf" name="passwordconf" value={passwordconf} placeholder="Re-enter password" onChange={onChange} />
        </div>
      </form>
    </section>
  </>
}

export default Register