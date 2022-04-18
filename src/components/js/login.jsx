import '../styles/login.css';
import {FcManager} from 'react-icons/fc';
import {Link} from 'react-router-dom';
import React from 'react'
import {useState, useEffect} from 'react';
import Loading from './Spinner-global';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { login, reset} from '../../features/auth/authSlice';


function Login() {
  const [formData, SetFormData] = useState({
    email: '',
    password: '',
    passwordconf: ''
  })

  const {email, password, passwordconf} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
      toast("Something went wrong" , {
        position: toast.POSITION.TOP_CENTER})
    }
    if(isSuccess || user ) {
      navigate('/')
      toast("Successfully Login!" , {
        position: toast.POSITION.TOP_CENTER})
    }   
    dispatch(reset)

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    SetFormData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if(isLoading) {
    return <Loading />
  }

  return <>
    <div className='top-nav-log' />
    <section className='reg-form'>
    <section className='heading'>
      <h1>
        <FcManager /> Login
      </h1>
    </section>
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