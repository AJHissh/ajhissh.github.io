const express = require('express')
const router = express.Router()
const {getPosts, setPosts, updatePosts, deletePosts} = require('../controllers/user-posts-random-Controller')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getPosts).post(protect, setPosts)

router.route('/:id').put(protect, updatePosts).delete(protect, deletePosts)


module.exports = router