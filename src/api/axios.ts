import axios from 'axios';


var instance = axios.create({
    baseURL: 'http://localhost:3555/api/'

});

export default instance;