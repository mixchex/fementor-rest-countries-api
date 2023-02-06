import axios from 'axios';

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});

export default instance;