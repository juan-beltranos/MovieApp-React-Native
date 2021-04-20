import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '845830b044da48c46edee3e9a1b50525',
        language: 'es-Es'
    }
});

export default movieDB;