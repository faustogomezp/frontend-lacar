import axios from 'axios'

export const getDataVariable = (logger) => {
    return axios.get(`http://localhost:3001/api/variables/online/${logger}`).then((response) => {
        const { data } = response;
        return data;
    });
}
