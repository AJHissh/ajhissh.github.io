import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/contact.css"
import { toast } from 'react-toastify';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUB_ID)
      .then((result) => {
          console.log(result.text)
          toast("Message sent, Thank you!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div className='ContactForm'>
        <h1> Contact Form </h1>
      <div className='ContactContainer'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
            <form ref={form} onSubmit={sendEmail}>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='user_name'
                      className='form-control formInput'
                      placeholder='Name'
                      required
                    ></input>
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='user_email'
                      className='form-control formInput'
                      placeholder='Email address'
                      pattern= "[a-zA-Z0-9.!#$%*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]"
                      size="30"
                      required
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='form_subject'
                      className='form-control formInput'
                      placeholder='Subject'
                      required
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                      required
                    ></textarea>
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;