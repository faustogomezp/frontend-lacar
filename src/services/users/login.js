import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/'

const login = async credentials => {
    const {data} = await axios.post(baseUrl + 'login', credentials)
    return data
}

const createUser = async credentials => {
    const {data} = await axios.post(baseUrl + 'users', credentials)
    return data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, createUser }
