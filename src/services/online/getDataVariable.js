import axios from 'axios'

export const getDataVariable = (logger) => {
    return axios.get(`http://neusapry.com:3001/api/variables/online/${logger}`).then((response) => {
        const { data } = response;
        console.log(data);
        return data;
    });
}
