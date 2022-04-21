import React from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../styles/postForm.css'
import { createPost } from '../../features/posts/postSlice';
import { toast } from 'react-toastify';
import ShowPosts from './showposts';



function PostForm(props) {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const post = [text]
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost({text}))
    toast(`Thank you for posting, ${user.name}!`)
    setText('')
  }
  return (
    <section className='postform'>
        <form onSubmit={onSubmit}>
          <div className='form-g'>
            <input type='text' name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text' required />
          </div>
          <div className='form-g'>
            <button className='btn-post' type='submit'> Submit Post </button>
          </div>
          <ShowPosts text={post} />
        </form>
    </section>
  )
}

export default PostForm;
