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


const getHistoryVariable = (logger, dIni, dFin) => {
    if (token){
        console.log(token)
        const config = {
            headers: {
                Authorization: token
            },

        }
        const bodyParameters = 
        {
            dateIni: dIni,
            dateFin: dFin
        }
        const baseUrl = `http://www.neusapry.com:3001/api/variables/${logger}`
        return axios.post(baseUrl, bodyParameters, config).then((response) => {
            const { data } = response;
            console.log(data)
            return data;
        });
    }
}



export default { getDataVariable, setToken, getToken, getHistoryVariable}
