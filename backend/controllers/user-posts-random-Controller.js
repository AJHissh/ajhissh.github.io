const asyncHandler = require('express-async-handler')
const Posts = require('../models/user-posts-random-model')
// const User = require('../models/userModel')
// @desc Get Posts
// @route GET /api/user-posts
// @access Private

const getPosts = asyncHandler(async (req, res) => {

    const posts = await Posts.find({posts: req.user.posts})
    res.status(200).json(posts)
})

// @desc Write Posts
// @route GET /api/user-posts
// @access Private

const setPosts = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const posts = await Posts.create({
        text: req.body.text,
        user: req.user.id,  
    } ) 
    console.log(posts)
    res.status(200).json(posts)
})

// @desc Update Posts
// @route GET /api/user-posts/:id
// @access Private

const updatePosts = asyncHandler(async (req, res) => {

    const posts = await Posts.findById(req.params.id)

    if (!posts) {
        res.status(400)
        throw new Error('Post not found')
    }
    

    // checks for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Matches user with user who posted 

    if (posts.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authenticated')
    }

    const updatedPosts = await Posts.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.status(200).json(updatedPosts)
})

// @desc Delete Post
// @route GET /api/post/:id
// @access Private

const deletePosts = asyncHandler(async (req, res) => {

    const posts = await Posts.findById(req.params.id)

    
    if (!posts) {
        res.status(400)
        throw new Error('Post does not exist')
    }
// checks for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
// Matches user with user who posted 
    if (posts.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error(`${global.user}, ${user.id}`)
            
    } else {
    
    await Posts.findByIdAndDelete(posts)
    res.status(200).json({ id: req.params.id})
    }

})

module.exports = {
    getPosts,
    setPosts,
    updatePosts,
    deletePosts
}