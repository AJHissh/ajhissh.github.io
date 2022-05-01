import React from 'react';
import '../styles/postForm.css'



function PostForm({post, user}) {

  return (
    <div className='table-responsive '>
      <table className='table table-striped table-hover'>
      <thead>
        <tr>
          <th scope='col'>Message</th>
          <th scope='col'>Timestamp</th>
          <th scope='col'>User ID</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
        <td>{post.text}</td>  
        <td>{new Date(post.createdAt).toLocaleString('en-US')}</td>
        <td>{post.user}</td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default PostForm;
