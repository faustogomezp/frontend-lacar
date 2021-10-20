import axios from 'axios'

export const getDataVariable = () => {
    return axios.get('https://backend-lacar.herokuapp.com/api/variables/neusa').then((response) => {
        const {data } = response;
        return data;
    });
}
