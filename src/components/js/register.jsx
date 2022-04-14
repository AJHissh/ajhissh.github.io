import React from 'react';
import {useState, useEffect} from 'react';
import {FcManager} from 'react-icons/fc';
import "../styles/register.css"
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { register, reset, state } from '../../features/auth/authSlice';
import Loading from './Spinner-global';


function Register() {
  const [formData, SetFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordconf: ''
  })

  const {name, email, password, passwordconf} = formData
  
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
      toast("Successfully Registered!" , {
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

     if (password !== passwordconf) {
       toast.error('Passwords do not match')
     } else {
       const userData = {
         name,
         email,
         password,
       }
       dispatch(register(userData))
     }
    }

    if(isLoading) {
      return <Loading />
    }

  return (
  <>
    <div className='top-nav-log' />
    <section className='reg-form'>
    <section className='heading'>
      <h1>
        <FcManager /> Register
      </h1>
    </section>
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
  )
}

export default Register;