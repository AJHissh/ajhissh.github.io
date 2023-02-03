import React from "react";
import '../styles/forum.css';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";



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
        <div className="table-responsive">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>General</th>
                    <th>Description</th>
                    <th>Date Created</th>
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
                <td>4/21/2022</td>
            </tr>
            <tr>
            <td>
            <Link to='/Forum-Random' >
                Random Discussion
            </Link>     
            </td>
            <td  className="TD-2"> Discuss anything in this thread</td>
            <td>4/29/2022 </td>
            </tr>
            </tbody>
        </table>
        </div>
        <div>
            
        </div>
    {/* <footer className="foot-forum">
        <span>&copy;  drew hissh </span>
    </footer> */}
    </section>
    </div>
    
    )
}


export default Testerforum;