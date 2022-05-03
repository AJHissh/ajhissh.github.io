import React from "react";
import '../styles/forum.css';
import { useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loading from "./Spinner-global";
import PostForm from "./postForm";
import {useState} from 'react';
import { getPosts, reset } from "../../features/posts/postSlice"
import { createPost } from '../../features/posts/postSlice';


function ForumIntro() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {posts, isLoading, isError, message} = useSelector((state) => state.posts)
    

    

    const [text, setText] = useState('')
    const post = [text]
    const onSubmit = (e) => {
      e.preventDefault()
      dispatch(createPost({text}))
      toast(`Thank you for posting, ${user.name}!`)
      setText('')
    }

    useEffect(() => {
        if (isError) {
            console.log(message)
        }


        dispatch(getPosts())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])
    
    if (isLoading){
        return <Loading />
    }
    
    return (
    <div className="forum-cont">
    <section className='heading-forum'>
      <h1>
         Introduce yourself, {user.name}!
      </h1>
        <div class="forum-nav">
            <nav class="navigation hide" id="navigation">
                <ul class="nav-list">
                <li class="navfor-item"> 
                    <Link to='/Forum'>
                        Forums
                    </Link>
                    </li>
                    <li class="navfor-item">Posts</li>
                    <li class="navfor-item">Detail</li>
                </ul>
            </nav>
        </div>
        <div class="search-box">
            <div>
                <select name="" id="">
                    <option value="Everything">Everything</option>
                    <option value="Titles">Titles</option>
                    <option value="Descriptions">Descriptions</option>
                </select>
                <input type="text" name="q" placeholder="search ..."/>
                <button><i class="fa fa-search"></i></button>
            </div>
        <section className="post-content">
            {post.length > 0 ? (
                <div className="posts">
                    {posts?.map((post) => (<PostForm key={post._id} post={post} user={user.name} />))}
                </div>
            ) : (<h3> You have not made any posts </h3>)}

        </section>
        </div>
        <section className='postform'>
        <form onSubmit={onSubmit}>
        <textarea type='text' name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' required/>
          <div className='form-g'>
            <button className='btn btn-primary' type='submit'> Submit Post </button>
          </div>
        </form>
        </section>
       </section>
       </div>
     

       )
}


export default ForumIntro;