import React from 'react';
import '../styles/postForm.css'



function PostForm({post, user}) {

  return (
    <div className='table-responsive'>
      <table className='table table-striped table-hover '>
      <thead>
        <tr>
          <th scope='table-info'>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
        <td>{post.text}
        <div className='post-date'>{new Date(post.createdAt).toLocaleString('en-US')}</div>
        <div className='post-user'> user id:{post.user}</div>
        </td>  
        </tr>
      </tbody>
      </table>
    </div>
  )
}

export default PostForm;
