const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { render } = require('@testing-library/react')
const { faMessage } = require('@fortawesome/free-regular-svg-icons')
const {toast} = require('react-toastify');


// @desc Register new user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async(req, res) => {

    const {name , email, password} = req.body

    if (! name || !email || !password) {
        res.status(400)
        throw new Error('Please input valid information')
    }

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //hash pass
    const salt = await bcrypt.genSalt(15)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email, 
            token: generateToken(user._id)   
        })
        console.log(`user "${name}" with email "${email}" succesfully registered`.green.underline)
        
        

    } else {
        res.status(400)
        throw new Error('Invalid Information')
}})

// @desc Authenticate new user
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    //checks for email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)    
        })
    } else {
        res.status(400)
        throw new Error('Invalid username or password')
    }

})

// @desc Retrieve user data
// @route GET /api/users/login
// @access Private

const getMe = asyncHandler(async(req, res) => {   
    res.status(200).json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}