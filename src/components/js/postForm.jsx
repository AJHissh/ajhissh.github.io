import React from 'react';
import '../styles/postForm.css'



function PostForm({post}) {

  return (
    <div className='post'>
      <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Message</th>
          <th scope='col'>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
        <td>{post.text}</td>  
        <td>{new Date(post.createdAt).toLocaleString('en-US')}</td>
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default PostForm;
