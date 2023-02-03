import {configureStore} from '@reduxjs/toolkit'
// import { defaults } from 'gh-pages'
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/posts/postSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postReducer
    },
})