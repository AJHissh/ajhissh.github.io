import {configureStore} from '@reduxjs/toolkit'
// import { defaults } from 'gh-pages'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})