import axios from 'axios';

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
    params: {
        api_key: "bee9fa9bad3bc48b8393cb939d815440",
        language: "ko-KR"
    }
})

export default instance;