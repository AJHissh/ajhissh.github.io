import axios from 'axios'

const API_URL = '/api/users/'

// Registers User

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Log out

const logout = () => {
    window.localStorage.removeItem('user')
    // localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
}

export default authService