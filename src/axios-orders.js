import axios from 'axios';

const instace = axios.create({
    baseURL: 'https://theburgerbuilder-bfe16.firebaseio.com/'
});

export default instace;