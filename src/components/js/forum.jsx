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


function Testerforum() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    
    return (
    <div className="forum-cont">
    <section className='heading-forum'>
      <h1>
         Welcome to the Forum, {user.name}!
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
        </div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>General</th>
                    <th>Description</th>
                    <th>Posts</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>  
                <Link to='/Forum-Introduction' >
                Introduction 
                </Link>
                </td>
                <td className="TD-1"> Introduce yourself to the forum  </td>
            </tr>
            <tr>
            <td>
            <Link to='/Forum-Random' >
                Random Discussion
            </Link>     
            </td>
            <td  className="TD-2"> Discuss anything in this thread</td>
            </tr>
            </tbody>
        </table>
        <div>
            
        </div>
    <footer className="foot-forum">
        <span>&copy;  drew hissh </span>
    </footer>
    </section>
    </div>
    
    )
}


export default Testerforum;