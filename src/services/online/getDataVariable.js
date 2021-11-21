import axios from 'axios'

let token = null

const setToken = (newToken) => {
    token = `Bearer ${newToken}`;
}

const getToken = () => {
    return token;
}

const getDataVariable = (logger) => {
    if (token){
    const config = {
        headers: {
            Authorization: token
        }
    }
    const baseUrl = `http://localhost:3001/api/variables/online/${logger}`
    return axios.get(baseUrl, config).then((response) => {
        const { data } = response;
        return data;
    });
    }
}



export default { getDataVariable, setToken, getToken}
