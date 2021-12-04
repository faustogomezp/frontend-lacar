import axios from 'axios'

const baseUrl = 'http://www.neusapry.com:3001/api/'

const login = async credentials => {
    const {data} = await axios.post(baseUrl + 'login', credentials)
    return data
}

const createUser = async credentials => {
    const {data} = await axios.post(baseUrl + 'users', credentials)
    return data
}

export default { login, createUser }
