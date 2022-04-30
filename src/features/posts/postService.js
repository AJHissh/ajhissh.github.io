import axios from 'axios';

const API_URL = '/api/user-posts/'

// Create new post

const createPost = async (postData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } 

    const response = await axios.post(API_URL, postData, config)

    return response.data
}

// Get user posts

const getPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } 

    const response = await axios.get(API_URL, config)

    return response.data
}


const postService = {
    createPost,
    getPosts,
}

export default postService;