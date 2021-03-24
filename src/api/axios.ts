import axios from 'axios';


var instance = axios.create({
    baseURL: 'http://localhost:7100/api/'

});

export default instance;